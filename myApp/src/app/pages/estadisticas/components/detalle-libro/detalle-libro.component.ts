import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

declare var Chart: any;

@Component({
    selector: 'detalle-libro',
    templateUrl: './detalle-libro.component.html',
    styleUrls:['./detalle-libro.component.scss']
})

export class detalleLibroComponent implements OnInit {

    // @Input() libro: any;

    constructor(private router: Router) { }

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
      


}
