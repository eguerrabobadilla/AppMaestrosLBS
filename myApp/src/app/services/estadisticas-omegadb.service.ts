import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, delay, Observable, take } from 'rxjs';
import { Campus } from '../pages/tiempo-de-uso-de-docentes/interfaces/campus';

@Injectable({
  providedIn: 'root'
})
export class EstadisticasOmegaService {

	private url: string = 'https://pruebasnek-default-rtdb.firebaseio.com';
	// private urlOmega: string = 'https://www.alfalbs.app/ApiOmega';
	 private urlOmega: string ='http://192.168.20.15:5000';
	// private urlOmega: string ='https://dev.alfalbs.app/ApiOmega';
	ws: string = 'api/ReportesPerseus';

  	constructor(private http: HttpClient) { }


	createRegistroLibro(libro: any ) {
		return this.http.put(`${this.url}/${libro.idLibro}.json`, libro);
	}

	getLibroExiste(idLibro: string)  {
		return this.http.get(`${this.url}/${idLibro}.json`)
	}

	addSecuenciaLibro(idLibro: string, datosLibro: any) {
		return this.http.post(`${this.url}/${idLibro}/secuencias.json`, datosLibro);
	}
	
	getCampus() {
		return this.http.get<Campus[]>(`${this.urlOmega}/${this.ws}/getCampus`);
	}
	
	getOneCampus(campusId: number) {
		return this.http.get<Campus[]>(`${this.urlOmega}/${this.ws}/getOneCampus/${campusId}`);
	}

	getTopCampusData(datosLibro: any, options?: any) {
		return this.http.post(`${this.urlOmega}/${this.ws}/getTopCampusData`, datosLibro, options);
	}
	
	getTotalLibros() {
		return this.http.get<any[]>(`${this.urlOmega}/${this.ws}/CountLibrosPorEscolaridad`);
	}

	getTotalUsuarios() {
		return this.http.get<any[]>(`${this.urlOmega}/${this.ws}/CountUsuariosPorTipo`);
	}
}

