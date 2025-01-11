import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';


@Component({
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls:['./menu.component.scss'] 
})

export class menuComponent   {
    constructor(
      private dataService: DataService,
      private router: Router,
      ) { }


  navigateToRoute(route: string){
    this.dataService.reiniciarNombreLibro('');
    this.dataService.rutaActual$.next('/home/'+route);
    this.router.navigate(['/home/'+route]);
  }

}