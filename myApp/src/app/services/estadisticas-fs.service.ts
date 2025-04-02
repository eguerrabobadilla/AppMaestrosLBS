import { inject, Injectable } from '@angular/core';

import { Firestore, collectionData, collection, doc, getDoc, collectionGroup, getDocs } from '@angular/fire/firestore';
require('@angular/fire/auth')

import { AngularFireFunctions } from '@angular/fire/compat/functions';
//import { collection, getDocs, Firestore } from "firebase/firestore";

import { firstValueFrom, Observable } from 'rxjs';
import { EstadisticasOmegaService } from './estadisticas-omegadb.service';
import { forEach } from 'jszip';
import { Campus } from '../pages/tiempo-de-uso-de-docentes/interfaces/campus';
import { HttpClient } from '@angular/common/http';

interface cardTopCampus {
    Campus: String,
    Horas: String,
    Usuarios: String,
    DescargasLibro: String,
    EscolaridadLibro: String,
    GradoLibro: String,
    PortadaLibro: String,
    Libro: String,
    Ranking: String
  }

interface topRankings {
    libroId: String,
    horas: Number
  }

@Injectable({
  providedIn: 'root'
})
export class EstadisticasFsService {
	usuario: string;
	secData$: Observable<any[]>;

	doc: any;
	data$: any;
	private http = inject(HttpClient);
	campuses: any;
	topCampusData = {};


  constructor(
	private firestore: Firestore = inject(Firestore),
	private functions: AngularFireFunctions,
	private estadisticasOmegaService: EstadisticasOmegaService
	) { 
		if(localStorage.getItem('USER_INFO') !== null ) {
			this.usuario = this.getKeyToken('usuario');
		}
  	}

	async getHorasCampus() {

		console.log("busca los campus");
		this.campuses = await firstValueFrom(this.estadisticasOmegaService.getCampus());
		console.log("Encuentra los campus");
		let horasCampus = { labels: [], data: [] } as { labels: string[]; data: number[] };

		// console.log("campus:",this.campuses);
		
		await Promise.all(
			this.campuses.map(async (campus) => {
				const examenRef = doc(this.firestore, `EstadisticasLibros/Campus/${campus.Id}/HorasTotales`);
				const docSnap = await getDoc(examenRef);
			
				horasCampus.labels.push(campus.Nombre);
				// console.log(campus.Nombre);
			
				if (docSnap.exists()) {
					horasCampus.data.push(docSnap.get("HorasActualizado"));
				} else {
					horasCampus.data.push(0);
				}
			})
		);

		horasCampus.labels = horasCampus.labels
			.map((label, index) => ({ label, value: horasCampus.data[index] }))
			.sort((a, b) => b.value - a.value)
			.map(item => item.label);
	
	  	horasCampus.data.sort((a, b) => b - a);

		console.log(horasCampus);
		return(horasCampus);
	}

	/* Tabla main dashboard */
	async getTopCampus() {
		const transformedData: { [key: number]: { LibroId: number; Horas: number } } = {};

		console.log('dashboard');
		this.topCampusData = await firstValueFrom(this.getBestRankedBooks('topRankings'));

		for (let key in this.topCampusData) {
			transformedData[Number(key)] = {
				LibroId: parseInt(this.topCampusData[key].libroId),
				Horas: 2
			};
		}

		const body = { CampusLibros: transformedData };
		
		// console.log(body);

		const response = await firstValueFrom(this.estadisticasOmegaService.getTopCampusData(body, {
            headers: { 'Content-Type': 'application/json' }
        	})
		);

		// console.log(response);

		return response;
	}

	// Función que trae la data de los libros para un campus para llenar la tabla en estadisticas-campus 
	async getTopLibros(campusId: string) {
		// console.log('stat campus');
		const transformedData: { [key: number]: { LibroId: number; Horas: number } } = {};
		this.topCampusData = await firstValueFrom(this.getBestRankedBooks('general', campusId));
		for (let key in this.topCampusData) {
			let x = 0;
			this.topCampusData[key].forEach(libro => {
				// console.log(libro);
				// console.log(libro.libroId);
				transformedData[Number(x)] = {
					LibroId: parseInt(libro.libroId),
					Horas: libro.horas
				};
				x++;
			  });
			// console.log(this.topCampusData[key].libroId);
			// console.log(parseInt(this.topCampusData[key].libroId));
			// if (typeof())
		}
		// console.log(this.topCampusData);		
		// console.log("Transformed data:", transformedData);
		
		const body = { CampusLibros: transformedData };
		
		// console.log(body);

		const response = await firstValueFrom(this.estadisticasOmegaService.getTopCampusData(body, {
            headers: { 'Content-Type': 'application/json' }
        	})
		);

		console.log(response);

		return response;
	}

	async getCampusBookList(campusId) {
		const campusBooksData = await firstValueFrom(this.getBookListFromCampus(campusId));

		console.log(campusBooksData);
		return campusBooksData;
	}

	callFunction(): Observable<any> {
		console.log("estes es el bueno")
		const data = { data: "" };  // Datos a enviar en el body
		return this.http.post<any>(`https://us-central1-secure-cipher-394101.cloudfunctions.net/calcularTiemposEstadisticas`, data);
	  }

	getBestRankedBooks(modo: string, CampusId?: string): Observable<any> {
		console.log("TEst get");
		console.log(modo);
		console.log(CampusId);
		console.log("fin camosp");
		
		if(modo === 'topRankings'){
			console.log('dashboard');
			return this.http.get<topRankings>(`https://us-central1-secure-cipher-394101.cloudfunctions.net/getLibrosTopRanking?modo=${modo}`);
		}
		else if (modo === 'general'){
			console.log('stat campus');
			return this.http.get<topRankings>(`https://us-central1-secure-cipher-394101.cloudfunctions.net/getLibrosTopRanking?modo=${modo}&campusId=${CampusId}`);
		}
		else
			return this.http.get<topRankings>(`https://us-central1-secure-cipher-394101.cloudfunctions.net/getLibrosTopRanking?modo=general`);

	  }

	getBookListFromCampus(CampusId: number): Observable<any> {
		console.log("TEst get")
		return this.http.get<topRankings>(`https://us-central1-secure-cipher-394101.cloudfunctions.net/getBookListRankings?campusId=${CampusId}`);
	  }

	getKeyToken(key: string): string {

		const jwt = localStorage.getItem('USER_INFO');
	
		const jwtData = jwt!.split('.')[1];
		// let decodedJwtJsonData = window.atob(jwtData);
		const decodedJwtJsonData = decodeURIComponent(escape(window.atob(jwtData)));
		const decodedJwtData = JSON.parse(decodedJwtJsonData);
	
		const value = decodedJwtData[key];
	
		return value;
	}
}
