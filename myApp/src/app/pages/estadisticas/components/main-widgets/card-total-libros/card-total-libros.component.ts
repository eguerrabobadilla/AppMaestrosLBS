import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { Config } from 'datatables.net';
import { EstadisticasPage } from './../../../estadisticas.page';

@Component({
  selector: 'card-total-libros',
  templateUrl: 'card-total-libros.component.html',
  styleUrls: ['card-total-libros.component.scss'],
})


export class cardTotalLibrosComponent implements OnInit { 

   constructor(      
      private router: Router,
      public EstadisticasPage: EstadisticasPage
    ) { }
  
  totalLibros: number = 0;
  totalLibrosObj;
  dtOptions: Config = {};
  
  ngOnInit(): void {

     this.totalLibrosObj = [
      { Escolaridad: "Kinder", CantidadLibros: Math.floor(Math.random() * 100) + 1 },
      { Escolaridad: "Primaria", CantidadLibros: Math.floor(Math.random() * 100) + 1 },
      { Escolaridad: "Secundaria", CantidadLibros: Math.floor(Math.random() * 100) + 1 },
      { Escolaridad: "Preparatoria", CantidadLibros: Math.floor(Math.random() * 100) + 1 },
      { Escolaridad: "Universidad", CantidadLibros: Math.floor(Math.random() * 100) + 1 }
    ];

    this.totalLibrosObj.forEach(element => {
      this.totalLibros += element.CantidadLibros;
    });

    
  }
}
