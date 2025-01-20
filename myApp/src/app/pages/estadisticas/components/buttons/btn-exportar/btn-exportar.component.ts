import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'btn-exportar',
  templateUrl: 'btn-exportar.component.html',
  styleUrls: ['btn-exportar.component.scss'],
})


export class btnExportarComponent implements OnInit { 
  
  @Input() size:any = '';

  ngOnInit(): void {
    
  }
}