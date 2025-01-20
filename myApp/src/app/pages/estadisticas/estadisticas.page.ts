import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IonCol } from '@ionic/angular';
import { cardTopCampusComponent } from './components/main-widgets/card-top-campus/card-top-campus.component';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
    selector: 'app-page-estadisticas',
    templateUrl: './estadisticas.page.html',
    styleUrls: ['./estadisticas.page.scss'],
}) 

export class EstadisticasPage implements OnInit {

    @ViewChild('horasUsoCampusCol') horasUsoCampusCol: ElementRef<HTMLDivElement>;
    @ViewChild('totalLibrosCol') totalLibrosCol: ElementRef<HTMLDivElement>;
    @ViewChild('topCampusCol') topCampusCol: ElementRef<HTMLDivElement>;
    @ViewChild('usuariosCol') usuariosCol: ElementRef<HTMLDivElement>;
    @ViewChild('topCampusCard') topCampusComponent: cardTopCampusComponent;
    
    @Output() showColumnTopCampusEvent = new EventEmitter<void>();

    colSizeL = '8'
    colSizeS = '4'
    display = true
    extraInfo = true

    constructor(
          private dataService: DataService,
          private router: Router,
          private route: ActivatedRoute
        ) { }

    ngOnInit() { }

    verMasBtn() {
        // Cambiar el tamaño de las columnas
        this.colSizeL = this.colSizeL === '8' ? '12' : '8';
        this.colSizeS = this.colSizeS === '4' ? '0' : '4';

        // Ocultar Total libros y Usuarios
        // this.display = this.display === 'display: block' ? 'display: none' : 'display: block';
        this.display = !this.display;
        
        // Llama a la función del componente card-top-campus
        if (this.topCampusComponent) {
            this.topCampusComponent.triggerUpdate(this.extraInfo);
        }
        // Activar información extra en Top Campus
        this.extraInfo = this.extraInfo === false ? true : false;
    }

    

  navigateToRoute(route: string, queryParams?: string){
    console.log(route)
    console.log(this.route)
    this.router.navigate([route], { relativeTo: this.route, queryParams: { tipo: queryParams } });
    // this.router.navigate(['/home/estadisticas/'+route]);
  }
}