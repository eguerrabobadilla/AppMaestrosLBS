import { firstValueFrom } from 'rxjs';
import { EstadisticasFsService } from './../../../../../services/estadisticas-fs.service';
import { AfterContentInit, AfterViewChecked, AfterViewInit, Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonCard, IonCol } from '@ionic/angular';
import { DataService } from 'src/app/services/data.service';

declare var Chart: any;

@Component({
  selector: 'card-hora-uso-campus',
  templateUrl: 'card-hora-uso-campus.component.html',
  styleUrls: ['card-hora-uso-campus.component.scss'],
})

export class cardHoraUsoCampusComponent implements OnInit { 


  // @ViewChild('horasUsoCard') cardHoraUso: ElementRef<IonCard>;
  @ViewChild('horasUsoCard') cardHoraUso: ElementRef<HTMLDivElement>;
  @Input() horasUsoCampusCol!: IonCol;
  @Input() type: string;
  @Input() chartData: { labels: string[]; data: number[] };
  @Input() campus: string;

  @Output() verMasEvent = new EventEmitter<void>();
  
    constructor(
      private EstadisticasFsService: EstadisticasFsService,
    ) {

    }

    chartGeneral = {
      labels: ['Durango', 'Culiacán', 'Mazatlán', 'Torreón', 'Zacatecas', 'Ensenada', 'Mexicali'],
      data: [45, 44, 43, 40, 38, 35, 34]
    }

    chartCampus = {
      labels: ['Robótica 1', 'English 1', 'Bioquímica', 'Science 1', 'Lenguajes', 'English 2', 'English 4', 'Science 2', 'Science 3', 'History 6', 'English 5', 'Science 4', 'Español 1',],
      data: [48, 44, 43, 40, 39, 35, 34, 30, 25, 24 ,23, 15, 13]
    }

    labels: any[];
    data: any[];
    title: string;
    xChartTitle: string;
    
    
    async ngOnInit(): Promise<void> {

      
      console.log(this.type);

      this.labels = this.chartData.labels;
      this.data = this.chartData.data;
      if(this.type == 'General') {
        
        console.log(this.chartData);
        this.title = "Horas de Uso por Campus.";
        this.xChartTitle = "Campus";
      }
      else if (this.type == 'Campus') {
        // this.labels = this.chartCampus.labels;
        // this.data = this.chartCampus.data;
        this.title = "Horas de Uso: Campus "+this.campus+".";
        this.xChartTitle = "Libros"
      }

      const ctx = document.getElementById('myChart');

      const chart = new Chart(ctx, {
        type: 'bar',
        data: {
          
          labels: this.labels,
          datasets: [{
            // display: false,  
            label: 'Horas de uso',
            data: this.data,
            // borderWidth: 10,
            barThickness: 25,
            maxBarThickness: 30,
            backgroundColor: 'rgba(112, 76, 235, 1)',
            borderRadius: 10,
            borderSkipped: 'bottom',
            minBarLength: 10,
          }]
        },
        options: {
          plugins: {
             legend: {
                display: false
             }
          },
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              display: true,
              title: {
                  display: true,
                  text: 'Horas de uso',
                  color: '#704CEB',
                  font: {
                    family: 'Volte-Bold',
                    size: 14,
                    weight: '700',
                    lineHeight: 1.2,
                  },
                  padding: {top: 20, left: 0, right: 0, bottom: 0}
              },
              beginAtZero: true,
              grid: {
                display: true,
              },
              ticks: {
                color: '#704CEB',
                font: {
                  family: 'Volte-Regular',
                  size: 12,
                  weight: '500',
                  lineHeight: 1.2,
                },
              }
            },
            x: {
              display: true,
              title: {
                display: true,
                text: this.xChartTitle,
                color: '#704CEB',
                font: {
                    family: 'Volte-Bold',
                    size: 14,
                    weight: '700',
                    lineHeight: 1.2,
                },
                padding: {top: 20, left: 0, right: 0, bottom: 0}
              },
              grid: {
                display: false,
              },
              ticks: {
                color: '#704CEB',
                font: {
                  family: 'Volte-Regular',
                  size: 12,
                  weight: '500',
                  lineHeight: 1.2,
                },
              }
            }
          },
        }
      });

      if(ctx)
      // The following only works with ChartJS 2.x or 3.x.
      ctx.onclick = (evt) => {
        const points = chart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);
        console.log(points);
        if (points.length) {
          const firstPoint = points[0];
          const label = chart.data.labels[firstPoint.index];
          const value = chart.data.datasets[firstPoint.datasetIndex].data[firstPoint.index];

          console.log("---");
          console.log(firstPoint);
          console.log(firstPoint.index);
          console.log(label);
          console.log(value);
        }
          // const res = chart.getElementAtEvent(evt);
          // if (res.length === 0) {
          //   return;
          // }
          // alert('You clicked on ' + chart.data.labels[res[0]._index]);
      };
    }

    verMas() {
      this.verMasEvent.emit();
    }

    async getCampus() {
      const data = await this.EstadisticasFsService.getHorasCampus();
      console.log("data");
      console.log(data);
    }

}
