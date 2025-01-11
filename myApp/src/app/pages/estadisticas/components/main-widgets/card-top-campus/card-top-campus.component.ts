import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Component({
    selector: 'card-top-campus',
    templateUrl: './card-top-campus.component.html',
    styleUrls:['./card-top-campus.component.scss']
})

export class cardTopCampusComponent implements OnDestroy, OnInit {
    constructor(private router: Router) { }

    dtOptions: DataTables.Settings = {};
    CampusTops = 
    [
        {
          "Campus": "Saltillo",
          "Horas": 58,
          "Usuarios": 1986,
          "EscolaridadLibro": "Primaria",
          "GradoLibro": 4,
          "PortadaLibro": "https://www.alfalbs.app/ApiOmega/covers/ESC_01_robotica_v2.jpg",
          "Libro": "Formación Cívica y Ética"
        },
        {
          "Campus": "Mazatlán",
          "Horas": 87,
          "Usuarios": 1500,
          "EscolaridadLibro": "Primaria",
          "GradoLibro": 4,
          "PortadaLibro": "https://www.alfalbs.app/ApiOmega/covers/ESC_01_robotica_v2.jpg",
          "Libro": "Ciencias Naturales"
        },
        {
          "Campus": "Laguna",
          "Horas": 78,
          "Usuarios": 951,
          "EscolaridadLibro": "Preparatoria",
          "GradoLibro": 2,
          "PortadaLibro": "https://www.alfalbs.app/ApiOmega/covers/ESC_01_robotica_v2.jpg",
          "Libro": "English"
        },
        {
          "Campus": "Durango",
          "Horas": 1,
          "Usuarios": 745,
          "EscolaridadLibro": "Universidad",
          "GradoLibro": 6,
          "PortadaLibro": "https://www.alfalbs.app/ApiOmega/covers/ESC_01_robotica_v2.jpg",
          "Libro": "Formación Cívica y Ética"
        },
      ];
    oTable;
  
    // We use this trigger because fetching the list of persons can be quite long,
    // thus we ensure the data is fetched before rendering
    dtTrigger: Subject<any> = new Subject<any>();

    ngOnInit() { 

      this.dtOptions = {
        pagingType: 'full_numbers',
        dom: 'ft',
        searching: true,
        retrieve: true,
      };
      
      const esto = this;
      $(document).ready( function () {
        esto.oTable = $('#topCampus').DataTable({
          "dom": 't'
        });
      });

      // Cuando me suscriba para obtener la información, usar el trigger para pintar la tabla
      // this.dtTrigger.next();

    }

    onSearch(event: any) {
      const searchValue = event.target.value || '';
      this.oTable.search(searchValue).draw();
    }

    ngOnDestroy(): void {
        this.dtTrigger.unsubscribe();
    }

  
}