import { EstadisticasPage } from './../../estadisticas.page';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { Subject } from 'rxjs';
import { EstadisticasFsService } from 'src/app/services/estadisticas-fs.service';
import { EstadisticasOmegaService } from 'src/app/services/estadisticas-omegadb.service';


declare var Chart: any;

@Component({
    selector: 'estadisticas-campus',
    templateUrl: './estadisticas-campus.component.html',
    styleUrls:['./estadisticas-campus.component.scss']
})

export class estadisticasCampusComponent implements OnInit {

  // @Input() libro: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private EstadisticasFsService: EstadisticasFsService,
    private estadisticasOmegaService: EstadisticasOmegaService,
  ) { }

  
  dtOptions: DataTables.Settings = {};
  CampusTops = 
  [
      {
        "Campus": "Saltillo",
        "Horas": 58,
        "Usuarios": 1986,
        "DescargasLibro": 53,
        "EscolaridadLibro": "Primaria",
        "GradoLibro": '4',
        "PortadaLibro": "https://www.alfalbs.app/ApiOmega/covers/ESC_01_robotica_v2.jpg",
        "Libro": "Formación Cívica y Ética",
        "Ranking": 1,
      },
      {
        "Campus": "Mazatlán",
        "Horas": 87,
        "Usuarios": 1500,
        "DescargasLibro": 95,
        "EscolaridadLibro": "Primaria",
        "GradoLibro": '4',
        "PortadaLibro": "https://www.alfalbs.app/ApiOmega/covers/ESC_01_robotica_v2.jpg",
        "Libro": "Ciencias Naturales",
        "Ranking": 1,
      },
      {
        "Campus": "Laguna",
        "Horas": 78,
        "Usuarios": 951,
        "DescargasLibro": 72,
        "EscolaridadLibro": "Preparatoria",
        "GradoLibro": '2',
        "PortadaLibro": "https://www.alfalbs.app/ApiOmega/covers/ESC_01_robotica_v2.jpg",
        "Libro": "English",
        "Ranking": 1,
      },
      {
        "Campus": "Durango",
        "Horas": 1,
        "Usuarios": 745,
        "DescargasLibro": 84,
        "EscolaridadLibro": "Universidad",
        "GradoLibro": '6',
        "PortadaLibro": "https://www.alfalbs.app/ApiOmega/covers/ESC_01_robotica_v2.jpg",
        "Libro": "Formación Cívica y Ética",
        "Ranking": 1,
      },
      {
        "Campus": "Saltillo",
        "Horas": 58,
        "Usuarios": 1986,
        "DescargasLibro": 53,
        "EscolaridadLibro": "Primaria",
        "GradoLibro": '4',
        "PortadaLibro": "https://www.alfalbs.app/ApiOmega/covers/ESC_01_robotica_v2.jpg",
        "Libro": "Formación Cívica y Ética",
        "Ranking": 1,
      },
      {
        "Campus": "Mazatlán",
        "Horas": 87,
        "Usuarios": 1500,
        "DescargasLibro": 95,
        "EscolaridadLibro": "Primaria",
        "GradoLibro": '4',
        "PortadaLibro": "https://www.alfalbs.app/ApiOmega/covers/ESC_01_robotica_v2.jpg",
        "Libro": "Ciencias Naturales",
        "Ranking": 1,
      },
      {
        "Campus": "Laguna",
        "Horas": 78,
        "Usuarios": 951,
        "DescargasLibro": 72,
        "EscolaridadLibro": "Preparatoria",
        "GradoLibro": '2',
        "PortadaLibro": "https://www.alfalbs.app/ApiOmega/covers/ESC_01_robotica_v2.jpg",
        "Libro": "English",
        "Ranking": 1,
      },
      {
        "Campus": "Durango",
        "Horas": 1,
        "Usuarios": 745,
        "DescargasLibro": 84,
        "EscolaridadLibro": "Universidad",
        "GradoLibro": '6',
        "PortadaLibro": "https://www.alfalbs.app/ApiOmega/covers/ESC_01_robotica_v2.jpg",
        "Libro": "Formación Cívica y Ética",
        "Ranking": 1,
      },
      {
        "Campus": "Saltillo",
        "Horas": 58,
        "Usuarios": 1986,
        "DescargasLibro": 53,
        "EscolaridadLibro": "Primaria",
        "GradoLibro": '4',
        "PortadaLibro": "https://www.alfalbs.app/ApiOmega/covers/ESC_01_robotica_v2.jpg",
        "Libro": "Formación Cívica y Ética",
        "Ranking": 1,
      },
      {
        "Campus": "Mazatlán",
        "Horas": 87,
        "Usuarios": 1500,
        "DescargasLibro": 95,
        "EscolaridadLibro": "Primaria",
        "GradoLibro": '4',
        "PortadaLibro": "https://www.alfalbs.app/ApiOmega/covers/ESC_01_robotica_v2.jpg",
        "Libro": "Ciencias Naturales",
        "Ranking": 1,
      },
      {
        "Campus": "Laguna",
        "Horas": 78,
        "Usuarios": 951,
        "DescargasLibro": 72,
        "EscolaridadLibro": "Preparatoria",
        "GradoLibro": '2',
        "PortadaLibro": "https://www.alfalbs.app/ApiOmega/covers/ESC_01_robotica_v2.jpg",
        "Libro": "English",
        "Ranking": 1,
      },
      {
        "Campus": "Durango",
        "Horas": 1,
        "Usuarios": 745,
        "DescargasLibro": 84,
        "EscolaridadLibro": "Universidad",
        "GradoLibro": '6',
        "PortadaLibro": "https://www.alfalbs.app/ApiOmega/covers/ESC_01_robotica_v2.jpg",
        "Libro": "Formación Cívica y Ética",
        "Ranking": 1,
      },
      {
        "Campus": "Saltillo",
        "Horas": 58,
        "Usuarios": 1986,
        "DescargasLibro": 53,
        "EscolaridadLibro": "Primaria",
        "GradoLibro": '4',
        "PortadaLibro": "https://www.alfalbs.app/ApiOmega/covers/ESC_01_robotica_v2.jpg",
        "Libro": "Formación Cívica y Ética",
        "Ranking": 1,
      },
      {
        "Campus": "Mazatlán",
        "Horas": 87,
        "Usuarios": 1500,
        "DescargasLibro": 95,
        "EscolaridadLibro": "Primaria",
        "GradoLibro": '4',
        "PortadaLibro": "https://www.alfalbs.app/ApiOmega/covers/ESC_01_robotica_v2.jpg",
        "Libro": "Ciencias Naturales",
        "Ranking": 1,
      },
      {
        "Campus": "Laguna",
        "Horas": 78,
        "Usuarios": 951,
        "DescargasLibro": 72,
        "EscolaridadLibro": "Preparatoria",
        "GradoLibro": '2',
        "PortadaLibro": "https://www.alfalbs.app/ApiOmega/covers/ESC_01_robotica_v2.jpg",
        "Libro": "English",
        "Ranking": 1,
      },
      {
        "Campus": "Durango",
        "Horas": 1,
        "Usuarios": 745,
        "DescargasLibro": 84,
        "EscolaridadLibro": "Universidad",
        "GradoLibro": '6',
        "PortadaLibro": "https://www.alfalbs.app/ApiOmega/covers/ESC_01_robotica_v2.jpg",
        "Libro": "Formación Cívica y Ética",
        "Ranking": 1,
      },
      {
        "Campus": "Saltillo",
        "Horas": 58,
        "Usuarios": 1986,
        "DescargasLibro": 53,
        "EscolaridadLibro": "Primaria",
        "GradoLibro": '4',
        "PortadaLibro": "https://www.alfalbs.app/ApiOmega/covers/ESC_01_robotica_v2.jpg",
        "Libro": "Formación Cívica y Ética",
        "Ranking": 1,
      },
      {
        "Campus": "Mazatlán",
        "Horas": 87,
        "Usuarios": 1500,
        "DescargasLibro": 95,
        "EscolaridadLibro": "Primaria",
        "GradoLibro": '4',
        "PortadaLibro": "https://www.alfalbs.app/ApiOmega/covers/ESC_01_robotica_v2.jpg",
        "Libro": "Ciencias Naturales",
        "Ranking": 1,
      },
      {
        "Campus": "Laguna",
        "Horas": 78,
        "Usuarios": 951,
        "DescargasLibro": 72,
        "EscolaridadLibro": "Preparatoria",
        "GradoLibro": '2',
        "PortadaLibro": "https://www.alfalbs.app/ApiOmega/covers/ESC_01_robotica_v2.jpg",
        "Libro": "English",
        "Ranking": 1,
      },
      {
        "Campus": "Durango",
        "Horas": 1,
        "Usuarios": 745,
        "DescargasLibro": 84,
        "EscolaridadLibro": "Universidad",
        "GradoLibro": '6',
        "PortadaLibro": "https://www.alfalbs.app/ApiOmega/covers/ESC_01_robotica_v2.jpg",
        "Libro": "Formación Cívica y Ética",
        "Ranking": 1,
      },
    ];
  oTable;

  libro: any = {
      "Campus": "Saltillo",
      "Horas": 58,
      "Usuarios": 1986,
      "DescargasLibro": 1530,
      "EscolaridadLibro": "Primaria",
      "GradoLibro": '4',
      "PortadaLibro": "https://www.alfalbs.app/ApiOmega/covers/ESC_01_robotica_v2.jpg",
      "Libro": "Formación Cívica y Ética",
      "Ranking": 1,
  }

  columns = [
    { header: 'Campus 1', indexOffset: 1 },
    { header: 'Campus 2', indexOffset: 2 },
    { header: 'Campus 3', indexOffset: 3 }
  ];

  campusId: number;

  porcentajeUso: number;
  valorDeUsoTxt: string;
  valorDeUsoColor: string;
  
  array1: any[] = [];
  array2: any[] = [];
  array3: any[] = [];
  rows: any[] = [];
  arrayWithId: any[] = [];

  librosData: {};
  
  ngOnInit() { 

  // Leer CampusId
  this.route.queryParams.subscribe(params => {
    console.log(params); 

    this.campusId = params['CampusId'];
    console.log('CampusId:', this.campusId);
    this.testCampusBookList();
  });

    // Añadir un campo `id` basado en la posición
  this.arrayWithId = this.CampusTops.map((item, index) => ({
    id: index + 1, 
    ...item        
  }));

  for (let i = 0; i < this.arrayWithId.length; i += 3) {
    this.rows.push({
      column1: this.arrayWithId[i] || null,     // Elemento 1 de la fila
      column2: this.arrayWithId[i + 1] || null, // Elemento 2 de la fila
      column3: this.arrayWithId[i + 2] || null, // Elemento 3 de la fila
    });
  }

  this.dtOptions = {
    pagingType: 'full_numbers',
    dom: 'ft',
    searching: true,
    retrieve: true,
  };
  
  const esto = this;
  $(document).ready( function () {
    esto.oTable = $('#topCampus').DataTable({
      "dom": 't',    
      "responsive": true,
    });
  });

  // this.oTable.datatable(empty, colnames = rep("", ncol(empty)),options=list(ordering=F))

  // Cuando me suscriba para obtener la información, usar el trigger para pintar la tabla
  // this.dtTrigger.next();

}

  
  onSearch(event: any) {
    const searchValue = event.target.value || '';
    this.oTable.search(searchValue).draw();
  }

  navigateToRoute(route: string, queryKey?: string, queryParams?: string){
    console.log(route)
    console.log(this.route)
    
    const params = queryKey ? { [queryKey]: queryParams } : {};

    this.router.navigate([route], { relativeTo: this.route, queryParams: params });
    // this.router.navigate(['/home/estadisticas/'+route]);
  }

  
  async testCampusBookList() {
    // this.topCampusData = await firstValueFrom(this.EstadisticasFsService.getBestRankedBooks());
    this.librosData = await (this.EstadisticasFsService.getTopCampus('estadisticas-campus', String(this.campusId)));
    console.log(this.librosData);
    
  }

}
