import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'btn-ver-mas',
  templateUrl: 'btn-ver-mas.component.html',
  styleUrls: ['btn-ver-mas.component.scss'],
})


export class btnVerMasComponent implements OnInit { 
  
  @Input() size:any = '';
  @Input() route:any = '';
  @Input() data:any = '';
  
  ngOnInit(): void {
    
  }
}