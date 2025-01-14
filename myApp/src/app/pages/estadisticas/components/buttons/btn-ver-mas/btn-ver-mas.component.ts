import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'btn-ver-mas',
  templateUrl: 'btn-ver-mas.component.html',
  styleUrls: ['btn-ver-mas.component.scss'],
})


export class btnVerMasComponent implements OnInit { 
  
  @Input() size:any = '';
  @Input() route:any = '';
  @Input() data:any = '';

  constructor(
    private dataService: DataService,
    private router: Router,
    ) { }
  
  ngOnInit(): void {  
    
  }

  catchWidgetType(type: string) {

    switch(type){
      case 'horasDeUso':

      break;

    }
  }

  navigateToRoute(route: string){
    console.log(route);
    this.dataService.reiniciarNombreLibro('');
    this.dataService.rutaActual$.next('/home/'+route);
    this.router.navigate(['/home/'+route]);
  }

}