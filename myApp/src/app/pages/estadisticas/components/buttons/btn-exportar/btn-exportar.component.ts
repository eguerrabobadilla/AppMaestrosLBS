import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { IonSelect } from '@ionic/angular';

@Component({
  selector: 'btn-exportar',
  templateUrl: 'btn-exportar.component.html',
  styleUrls: ['btn-exportar.component.scss'],
})



export class btnExportarComponent implements OnInit { 
  
  @Input() size:any = '';
  @ViewChild('popover') popover: HTMLIonPopoverElement;

  isOpen = false;

  ngOnInit(): void {
    
  }
  
  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }

  excelClicked(e: Event) {
    console.log('excel');

    this.isOpen = false;
  }

  pdfClicked(e: Event) {
    console.log('pdf');

    this.isOpen = false;
  }

}