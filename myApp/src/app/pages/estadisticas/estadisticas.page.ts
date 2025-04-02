import { firstValueFrom } from 'rxjs';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { IonCol } from '@ionic/angular';
import { cardTopCampusComponent } from './components/main-widgets/card-top-campus/card-top-campus.component';
import { DataService } from 'src/app/services/data.service';
import { ActivatedRoute, Router } from '@angular/router';
import { EstadisticasFsService } from 'src/app/services/estadisticas-fs.service';
import { EstadisticasOmegaService } from 'src/app/services/estadisticas-omegadb.service';

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

    colSizeL = '8';
    colSizeS = '4';
    display = true;
    extraInfo = true;
    widgetsLoaded = false;
    chartData?: { labels: string[]; data: number[] };
    topCampusData: {};
    totalLibrosData: {};
    totalUsuariosData: {};


    constructor(
          private dataService: DataService,
          private router: Router,
          private route: ActivatedRoute,      
          private EstadisticasFsService: EstadisticasFsService,
          private estadisticasOmegaService: EstadisticasOmegaService,
        ) { }

    async ngOnInit() { 

      // -GET data de Horas de uso
      
      const [horasData, topCampusData] = await Promise.all([
        this.EstadisticasFsService.getHorasCampus(),
        this.EstadisticasFsService.getTopCampus(),
        
      ]);

      this.chartData = horasData;
      this.topCampusData = topCampusData;
      this.totalLibrosData = await firstValueFrom(this.estadisticasOmegaService.getTotalLibros());
      this.totalUsuariosData = await firstValueFrom(this.estadisticasOmegaService.getTotalUsuarios());

      console.log(this.totalLibrosData);
      console.log(this.totalUsuariosData);

      if(this.chartData && this.topCampusData)
        this.widgetsLoaded = true;
    }

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

    

  navigateToRoute(route: string, queryKey?: string, queryParams?: string){
    console.log(route)
    console.log(this.route)
    
    const params = queryKey ? { [queryKey]: queryParams } : {};

    this.router.navigate([route], { relativeTo: this.route, queryParams: params });
  }

  // Funciones para las pruebas de firestore, borrar antes de subir a prod
  async callFunction() {
    console.log('data:');
    const data = await this.EstadisticasFsService.callFunction().subscribe((data) => {
      console.log(data)
    });
  }

  async testTopCampus() {
    // this.topCampusData = await firstValueFrom(this.EstadisticasFsService.getBestRankedBooks());
    this.topCampusData = await (this.EstadisticasFsService.getTopCampus());
    console.log(this.topCampusData);
    
  }

}