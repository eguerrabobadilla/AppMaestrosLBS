import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'btn-ver-mas',
  templateUrl: 'btn-ver-mas.component.html',
  styleUrls: ['btn-ver-mas.component.scss'],
})


export class btnVerMasComponent implements OnInit { 
  
  @Input() size:any = '';
  // @Input() route:any = '';
  @Input() data:any = '';

  constructor(
    private dataService: DataService,
    private router: Router,
    private route: ActivatedRoute
    ) { }
  
  ngOnInit(): void {  
    
  }

  catchWidgetType(type: string) {

    switch(type){
      case 'horasDeUso':

      break;

    }
  }

  navigateToRoute(route: string, queryParams?: string){
    console.log(route);
    this.router.navigate([route], { relativeTo: this.route, queryParams: { tipo: queryParams } });
  }

}