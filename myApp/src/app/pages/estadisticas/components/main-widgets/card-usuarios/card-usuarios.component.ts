import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'card-usuarios',
    templateUrl: './card-usuarios.component.html',
    styleUrls:['./card-usuarios.component.scss']
})

export class cardUsuariosComponent implements OnInit {
    constructor(private router: Router) { }

    totalUsuarios: number;
    totalAlumnos: number;
    totalProfesores: number;
    porcentajeAlumnos;
    porcentajeProfesores;

    ngOnInit() { 

        this.totalAlumnos = 27300;
        this.totalProfesores = 3246;

        this.totalUsuarios = this.totalAlumnos + this.totalProfesores;

        this.porcentajeAlumnos = Math.round((this.totalAlumnos / this.totalUsuarios) * 100);
        this.porcentajeProfesores = Math.round((this.totalProfesores / this.totalUsuarios) * 100);

          
    }

  
}