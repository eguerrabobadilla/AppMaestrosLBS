import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstadisticasPage } from './../../estadisticas.page'
@Component({
    selector: 'elegir-campus',
    templateUrl: './elegir-campus.component.html',
    styleUrls: ['./elegir-campus.component.scss'],
}) 

export class elegirCampusComponent implements OnInit {
    
    type: string;
    title: string;
    subtitle: string;
    totalLibros: number;
    totalUsuarios: number = 0;
    totalUsuariosLibros: number = 0;

    escolaridad: string;
    grado: string;

    data: any[];
    dataUsuarios: any[] = [
        { "Campus": "Ensenada", "Usuarios": 1956 },
        { "Campus": "Mexicali", "Usuarios": 802 },
        { "Campus": "Nogales", "Usuarios": 946 },
        { "Campus": "Hermosillo", "Usuarios": 1485 },
        { "Campus": "Cd. Juárez", "Usuarios": 1015 },
        { "Campus": "Chihuahua", "Usuarios": 2272 },
        { "Campus": "Acuña", "Usuarios": 1716 },
        { "Campus": "Piedras Negras", "Usuarios": 1692 },
        { "Campus": "Cd. Obregón", "Usuarios": 1496 },
        { "Campus": "Durango", "Usuarios": 1734 },
        { "Campus": "Culiacan", "Usuarios": 837 }
      ]

    dataLibros: any[] = [
        { "Campus": "Ensenada", "Libros": 2437 },
        { "Campus": "Mexicali", "Libros": 1131 },
        { "Campus": "Nogales", "Libros": 1505 },
        { "Campus": "Hermosillo", "Libros": 2013 },
        { "Campus": "Cd. Juárez", "Libros": 2380 },
        { "Campus": "Chihuahua", "Libros": 1544 },
        { "Campus": "Acuña", "Libros": 2478 },
        { "Campus": "Piedras Negras", "Libros": 1655 },
        { "Campus": "Cd. Obregón", "Libros": 1476 },
        { "Campus": "Durango", "Libros": 1300 },
        { "Campus": "Culiacan", "Libros": 1807 }
      ]    

    escolaridades = [ 'Kinder', 'Primaria', 'Secundaria', 'Preparatoria', 'Universidad' ]
    gradosKinPrim = ['1', '2', '3', '4', '5', '6'];
    // gradosPrimaria = ['1', '2', '3', '4', '5', '6'];
    gradosSecunPrepa = ['1', '2', '3'];
    // gradosPreparatoria = ['1', '2', '3'];

    dataGrados = 
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
      ];

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        ) { }

    ngOnInit() { 

        
        this.dataUsuarios.forEach(element => {
            this.totalUsuarios += element.Usuarios;
        });

        const currentUrl  = this.router.url; 
        const segments = currentUrl.split('/');
        this.type = segments[segments.length -1 ]; 

        if(this.type == 'usuarios') {
            this.dataUsuarios.forEach(element => {
                this.totalUsuariosLibros += element.Usuarios;
            });
            // this.totalUsuariosLibros = 30546;
            this.data = this.dataUsuarios
            this.subtitle = "Total de Usuarios"
        }

        else if(this.type == 'libros') {
            this.dataLibros.forEach(element => {
                this.totalUsuariosLibros += element.Libros;
            });
            this.data = this.dataLibros;
            this.totalUsuariosLibros = 1302; // <-- Petición para traer el total
            this.subtitle = "Total de Libros"
            
        }

        else if(this.type == 'campus') {
            this.totalUsuariosLibros = 327; // <-- Petición para traer el total
            this.subtitle = "Total de Libros"

        }

        else if(this.type == 'grado') {
            
            this.data = this.dataGrados;
            this.totalUsuariosLibros = this.dataGrados.length;
            this.subtitle = "Total de Libros"

            this.escolaridad = this.dataGrados[0].EscolaridadLibro;
            this.grado = this.dataGrados[0].GradoLibro;

        }

    }

    navigateToRoute(route: string, queryParams?: string){
        console.log(route)
        console.log(this.route)
        this.router.navigate(['/home/estadisticas/'+route]);
        // this.router.navigate(['/home/estadisticas/'+route]);
      }

}