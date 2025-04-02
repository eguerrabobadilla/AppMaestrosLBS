import { EstadisticasPage } from './../../estadisticas.page';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Routes } from '@angular/router';
import { firstValueFrom, Subject } from 'rxjs';
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
  campusInfo: any;

  porcentajeUso: number;
  valorDeUsoTxt: string;
  valorDeUsoColor: string
  widgetsLoaded = false;
  
  array1: any[] = [];
  array2: any[] = [];
  array3: any[] = [];
  rows: any[] = [];
  arrayWithId: any[] = [];

  librosData: any;
  horasLibros = { labels: [], data: [] } as { labels: string[]; data: number[] };

  
  async ngOnInit() { 

  // Leer CampusId
  this.route.queryParams.subscribe(params => {
    this.campusId = params['CampusId'];
  });

  /* Data para el chart de hotas libros*/

  const [librosData] = await Promise.all([
    this.EstadisticasFsService.getTopLibros(String(this.campusId)),
    
  ]);

  this.campusInfo = await firstValueFrom(this.estadisticasOmegaService.getOneCampus(this.campusId));
  console.log(this.campusInfo);

  this.librosData = librosData;

  this.librosData.forEach(libro => {
    this.horasLibros.labels.push(libro.Libro);
    this.horasLibros.data.push(libro.Horas);
    
  });

  /* Tabla */

  this.arrayWithId = this.librosData.map((item, index) => ({
    id: index + 1, 
    ...item        
  }));

  console.log(this.arrayWithId)

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

  console.log(this.rows);
  this.widgetsLoaded = true;

  // this.oTable.datatable(empty, colnames = rep("", ncol(empty)),options=list(ordering=F))

  // Cuando me suscriba para obtener la información, usar el trigger para pintar la tabla
  // this.dtTrigger.next();

}

  
  onSearch(event: any) {
    const searchValue = event.target.value || '';
    this.oTable.search(searchValue).draw();
  }

  navigateToRoute(route: string, id: number){
    console.log(route)
    console.log(this.route)
    // const parametros = `{campus:'${this.campusInfo.Nombre}',language:'punjabi'}`

    console.log(this.arrayWithId)
    console.log(typeof(this.arrayWithId))

    const libroEncontrado = this.arrayWithId.find(libro => libro.id === id);

    console.log(libroEncontrado)
    
    // const params = queryKey ? { [queryKey]: queryParams } : {};

    this.router.navigate([route], { 
      relativeTo: this.route, 
      // queryParams: params 
      state:{
        data: libroEncontrado
      }
    });
    // this.router.navigate(['/home/estadisticas/'+route]);
  }

  
  async testCampusBookList() {
    // this.topCampusData = await firstValueFrom(this.EstadisticasFsService.getBestRankedBooks());
    this.librosData = await (this.EstadisticasFsService.getTopLibros(String(this.campusId)));
    console.log(this.librosData);
    
  }

}
