import { FolderComponent } from './../../../../components/folder/folder.component';
import { DataService } from './../../../../services/data.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { publicDecrypt } from 'crypto';
import { Subject } from 'rxjs';

declare var Chart: any;

@Component({
    selector: 'detalle-libro',
    templateUrl: './detalle-libro.component.html',
    styleUrls:['./detalle-libro.component.scss']
})

export class detalleLibroComponent implements OnInit {

    // @Input() libro: any;

    constructor(
      private router: Router,
      public dataService: DataService,
      public FolderComponent: FolderComponent,
      private sanitizer: DomSanitizer,
    ) { }

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

    book: any = {
      "Id": 2288,
      "Nombre": "Robótica 2024",
      "NombreArchivo": "ESC_01_robotica_v2",
      "Idioma": "Espanol",
      "Grados": "1",
      "Suffix": "°",
      "Escolaridad": "Kinder",
      "RutaThumbnails": "KIN_01_robotica_v2.jpg",
      "Version": 1,
      "HeightImg": 3543,
      "AspectRatio": 0.7399707753316399,
      "VersionThumbnails": 2,
      "TipoLibro": "Real",
      "Libroscentrodeidiomas": [],
      "Libroscodigos": [],
      "Librospreparatoria": [],
      "Maestroslibrosperseus": [],
      "Materias": [],
      "Usuariolibros": [],
      "Versiones": []
  }

    porcentajeUso: number;
    valorDeUsoTxt: string;
    valorDeUsoColor: string;
    
    ngOnInit() { 

        this.porcentajeUso = Math.round((this.libro.DescargasLibro / this.libro.Usuarios) * 100);
        const diff = 100 - this.porcentajeUso;

        this.obtenerValorDeUso(this.porcentajeUso);


        const ctx = document.getElementById('porcentajeDeUso');
        new Chart(ctx, {
          type: 'doughnut',
          data: {
            labels: ['Valor de uso'],
            datasets: [{
              data: [this.porcentajeUso,diff], 
              backgroundColor: [this.valorDeUsoColor,'#dddddd'], 
              borderColor: 'transparent',
              hoverBackgroundColor: [this.valorDeUsoColor,'#dddddd'], 
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
            },
            textInside: {
              text: "GeeksforGeeks",
              color: 'green',
              fontSize: 28
            }
          }
        });
    }

    obtenerValorDeUso(porcentaje: number) {
        if (porcentaje >= 90) {
          this.valorDeUsoTxt = 'Excelente.';
          this.valorDeUsoColor = '#704CEB'

        } else if (porcentaje >= 75) {
            this.valorDeUsoTxt = 'Bueno.';
            this.valorDeUsoColor = '#23DE7F';

        } else if (porcentaje >= 50) {
            this.valorDeUsoTxt = 'Regular.';
            this.valorDeUsoColor = '#FFD464';

        } else {
            this.valorDeUsoTxt = 'Deficiente.';
            this.valorDeUsoColor = '#f72828';
        }
      }

      abrirLibro() {
        console.log("ABRIR LIBRO")
        console.log(this.libro)
        console.log(JSON.stringify(this.libro))
        const data = { NombreLibro: this.book.Nombre, NombreArchivo: this.book.NombreArchivo }
        this.router.navigate(['/home/visor-libros'], { queryParams: {Nombre: this.book.Nombre, NombreArchivo: this.book.NombreArchivo} });
      }


}
