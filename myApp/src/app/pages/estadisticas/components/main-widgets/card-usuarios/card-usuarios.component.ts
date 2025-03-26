import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { EstadisticasPage } from './../../../estadisticas.page';

@Component({
    selector: 'card-usuarios',
    templateUrl: './card-usuarios.component.html',
    styleUrls:['./card-usuarios.component.scss']
})

export class cardUsuariosComponent implements OnInit {
    
    @Input() totalUsuariosObj: any;

    constructor(
        private router: Router,
        public EstadisticasPage: EstadisticasPage
    ) { }

    @Output() verMasEvent = new EventEmitter<void>();

    totalUsuarios: number;
    totalAlumnos: number;
    totalProfesores: number;
    porcentajeAlumnos;
    porcentajeProfesores;

    ngOnInit() { 

        this.totalAlumnos = this.totalUsuariosObj[0].Cantidad;
        this.totalProfesores = this.totalUsuariosObj[1].Cantidad;

        this.totalUsuarios = this.totalAlumnos + this.totalProfesores;

        this.porcentajeAlumnos = Math.round((this.totalAlumnos / this.totalUsuarios) * 100);
        this.porcentajeProfesores = Math.round((this.totalProfesores / this.totalUsuarios) * 100);

    }

    verMas() {
        this.verMasEvent.emit();
    }

  
}