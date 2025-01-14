import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
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
  @Output() verMasEvent = new EventEmitter<void>();
  
    constructor() {

    }
    
    ngOnInit(): void {
        const ctx = document.getElementById('myChart');

        new Chart(ctx, {
          type: 'bar',
          data: {
            
            labels: ['Durango', 'Culiacán', 'Mazatlán', 'Torreón', 'Zacatecas', 'Ensenada', 'Mexicali'],
            datasets: [{
              // display: false,  
              label: 'Horas de uso',
              data: [45, 44, 43, 40, 38, 35, 34],
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
                  text: 'Campus',
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
            }
          }
        });
    }

    verMas() {
      this.verMasEvent.emit();
    }

}
