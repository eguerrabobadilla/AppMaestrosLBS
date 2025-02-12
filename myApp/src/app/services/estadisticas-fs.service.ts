import { Injectable } from '@angular/core';
//import 'firebase/firestore';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { AngularFireFunctions, AngularFireFunctionsModule } from '@angular/fire/compat/functions';
//import { collection, getDocs, Firestore } from "firebase/firestore";

import { firstValueFrom, Observable } from 'rxjs';
import { EstadisticasOmegaService } from './estadisticas-omegadb.service';
import { forEach } from 'jszip';
import { Campus } from '../pages/tiempo-de-uso-de-docentes/interfaces/campus';



@Injectable({
  providedIn: 'root'
})
export class EstadisticasFsService {
	usuario: string;
	secData$: Observable<any[]>;

	doc: any;

  constructor(
	private firestore: AngularFirestore,
	private firebaseFunctions: AngularFireFunctionsModule,
	private estadisticasOmegaService: EstadisticasOmegaService
	) { 
		if(localStorage.getItem('USER_INFO') !== null ) {
			this.usuario = this.getKeyToken('usuario');
		}
  }

	async getHorasCampus() {

		const campuses = await firstValueFrom(this.estadisticasOmegaService.getCampus());
		let lstCampus: Campus[];

		console.log("campus:",campuses);
		campuses.forEach(campus => {
			console.log(campus.Id);
			const campusRef = this.firestore.collection("EstadisticasLibros").doc("Campus").collection(`${campus.Id}`).doc("HorasTotales").get();
			console.log(campusRef);
			console.log();
		});
		return("a");
	}

	getSecuecias(claveLibro: string) {
		return this.firestore.collection(`maestrosApp/libros/${claveLibro}/`).snapshotChanges();
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
