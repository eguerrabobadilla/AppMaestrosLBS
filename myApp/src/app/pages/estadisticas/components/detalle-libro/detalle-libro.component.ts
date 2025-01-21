import { FolderComponent } from './../../../../components/folder/folder.component';
import { DataService } from './../../../../services/data.service';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';
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
      public FolderComponent: FolderComponent
    ) { }

    libro: any = {
        "Campus": "Saltillo",
        "Horas": 58,
        "Usuarios": 1986,
        "DescargasLibro": 1530,
        "EscolaridadLibro": "Primaria",
        "GradoLibro": 4,
        "PortadaLibro": "https://www.alfalbs.app/ApiOmega/covers/ESC_01_robotica_v2.jpg",
        "Libro": "Formación Cívica y Ética",
        "Ranking": 1,
      }

    book: any = {
      "Id": 2288,
      "Nombre": "Robótica 2024",
      "NombreArchivo": "KIN_01_robotica_v2",
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

        console.log('detaslles de libros askdalsdka')
        console.log(this.libro)

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
      

      // Cosas de abrir libro

      /**
       * Parece que la parte de abrir libro se hace con un iframe que ya está puesto en la página de folder y no es un componente propio
       * irse a la página de libro y abrir el iframe se ve difícil
       * no parece buena opción poner lo mismo que en folder directo en este componente 
       * lo mejor sería crear un nuevo componente que sea solo el iframe para abrir el libro
       */
      
	  // abrirLibro(libro: any){
    //   const mainUrl: string = 'https://teacher.alfalbs.app/books/';
    //   let urlTemp = `${mainUrl}${libro.NombreArchivo}/index.html`;
  
    //   let urlTempdev = `${mainUrl}${libro.NombreArchivo.split("_prueba")[0]}/index.html`;
      
  
    //   this.urlLibrodev = this.domSanitizer.bypassSecurityTrustResourceUrl(urlTempdev);
      
    //   this.librosLoading = true;
    //   this.dataService.libroActual = libro;
    //   // const { Id } = libro;
      
    //   // accion abrir ifrime con link real libro
    //   this.dataService.setNombreLibroActual(libro.Nombre);
    //   this.iframeEstado = true;
    //   this.acordeonEstado = false;
    //   this.botonesEstado = true;
    //   setTimeout(() => {
    //     this.dataService.currentIframe = this.iframe.nativeElement.contentWindow;
    //   }, 100);
  
  
    //   }


}
