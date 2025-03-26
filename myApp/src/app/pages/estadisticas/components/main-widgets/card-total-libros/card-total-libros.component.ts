import { Component, Input, OnInit } from '@angular/core';
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
  
  @Input() totalLibrosObj: any;

   constructor(      
      private router: Router,
      public EstadisticasPage: EstadisticasPage
    ) { }
  
  totalLibros: number = 0;
  dtOptions: Config = {};
  
  ngOnInit(): void {

    this.totalLibrosObj.forEach(element => {
      this.totalLibros += element.Cantidad;
    });

    
  }
}
