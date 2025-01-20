import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'btn-back',
  templateUrl: 'btn-back.component.html',
  styleUrls: ['btn-back.component.scss'],
})


export class btnBackComponent implements OnInit { 

  constructor(private location: Location) {}
  
  ngOnInit(): void {
    
  }

  irAtras() {
    this.location.back();
  }
}