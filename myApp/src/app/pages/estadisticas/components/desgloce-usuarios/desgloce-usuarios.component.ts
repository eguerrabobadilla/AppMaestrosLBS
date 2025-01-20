import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstadisticasPage } from './../../estadisticas.page'

declare var Chart: any;

@Component({
    selector: 'desgloce-usuarios',
    templateUrl: './desgloce-usuarios.component.html',
    styleUrls: ['./desgloce-usuarios.component.scss'],
}) 

export class desgloceUsuariosComponent implements OnInit {

    type: string;
    dtOptions: DataTables.Settings = {};
    tableAlum;
    tableProf;
    
    totalUsuarios: number = 0;
    totalAlumnos: number = 0;
    totalProfesores: number = 0;
    porcentajeAlumnos = 0;
    porcentajeProfesores = 0;

    dataAlumnos = [
        {
            "Escolaridad": "Kinder",
            "Cantidad": 1520,
        },
        {
            "Escolaridad": "Primaria",
            "Cantidad": 1603,
        },
        {
            "Escolaridad": "Secundaria",
            "Cantidad": 1649,
        },
        {
            "Escolaridad": "Preparatoria",
            "Cantidad": 1956,
        },
        {
            "Escolaridad": "Universidad",
            "Cantidad": 1813,
        },
    ]
    dataProfesores = [
        {
            "Escolaridad": "Básicas",
            "Cantidad": 437,
        },
        {
            "Escolaridad": "Universidad",
            "Cantidad": 346,
        },
    ]

    
    constructor(
      private route: ActivatedRoute,
      private router: Router,
      ) { }
    
    ngOnInit(): void {

      
      const currentUrl  = this.router.url; 
      const segments = currentUrl.split('/');
      this.type = segments[segments.length -1 ]; 


      // Calcular usuarios

      this.dataAlumnos.forEach(element => {
        this.totalAlumnos += element.Cantidad;
      });
      this.dataProfesores.forEach(element => {
        this.totalProfesores += element.Cantidad;
      });

      this.totalUsuarios = this.totalAlumnos + this.totalProfesores;

      this.porcentajeAlumnos = Math.round((this.totalAlumnos / this.totalUsuarios) * 100);
      this.porcentajeProfesores = Math.round((this.totalProfesores / this.totalUsuarios) * 100);
      const diffAlum = 100 - this.porcentajeAlumnos;
      const diffProf = 100 - this.porcentajeProfesores;

    
      // tabla  
      this.dtOptions = {
        pagingType: 'full_numbers',
        dom: 't',
        searching: true,
        retrieve: true,
      };
      
      // charts

      
      const ctxAlum = document.getElementById('porcentajeAlumnos');
      new Chart(ctxAlum, {
        type: 'doughnut',
        data: {
          labels: ['Alumnos'],
          datasets: [{
            data: [this.porcentajeAlumnos,diffAlum], 
            backgroundColor: ['#23DE7F','#dddddd'], 
            borderColor: 'transparent',
            hoverBackgroundColor: ['#23DE7F','#dddddd'], 
          }]
        },
        options: {
          cutout: '70%',
          radius: 100,
          plugins: {
              legend: {
                  display: false,
                  textInside: true
              },
              tooltip: {
                  enabled: false,
              },
          }
        }
      });
      
      const ctxProf = document.getElementById('porcentajeProfesores');
      new Chart(ctxProf, {
        type: 'doughnut',
        data: {
          labels: ['Profesores'],
          datasets: [{
            data: [this.porcentajeProfesores,diffProf], 
            backgroundColor: ['#23DE7F','#dddddd'], 
            borderColor: 'transparent',
            hoverBackgroundColor: ['#23DE7F','#dddddd'], 
          }]
        },
        options: {
          cutout: '70%',
          radius: 100,
          plugins: {
              legend: {
                  display: false,
                  textInside: true
              },
              tooltip: {
                  enabled: false,
              },
          }
        }
      });

    }
}