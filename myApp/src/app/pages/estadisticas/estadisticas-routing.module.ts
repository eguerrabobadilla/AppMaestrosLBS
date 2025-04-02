import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EstadisticasPage } from './estadisticas.page';
import { detalleLibroComponent } from './components/detalle-libro/detalle-libro.component';
import { estadisticasCampusComponent } from './components/estadisticas-campus/estadisticas-campus.component';
import { elegirCampusComponent } from './components/elegir-campus/elegir-campus.component';
import { desgloceUsuariosComponent } from './components/desgloce-usuarios/desgloce-usuarios.component';

const routes: Routes = [
  {
    path: '',
    component: EstadisticasPage,
    children: [
    ]
  },
  {
    path: 'libros-descargados',
    loadChildren: () =>
      import('../libros-descargados/libros-descargados.module').then((m) => m.librosDescargadosModule),
  },
  {
    path: 'tiempo-de-uso-de-docentes',
    loadChildren: () =>
      import('../tiempo-de-uso-de-docentes/tiempo-de-uso-de-docentes.module').then((m) => m.TiempoDeUsoDeDocentesModule),
  },
  {
    path: 'detalle-libro',
    title: 'Detalles del libro',
    component: detalleLibroComponent,
  },
  {
    path: 'estadisticas-campus/detalle-libro',
    title: 'Detalles del libro',
    component: detalleLibroComponent,
  },
  {
    path: 'estadisticas-campus',
    title: 'Estadisticas campus',
    component: estadisticasCampusComponent,
    // children: [
    //   {
    //     path: 'detalle-libro',
    //     title: 'Detalles del libro', 
    //     component: detalleLibroComponent,
    //   },
    // ],
  },
  {
    path: 'elegir-campus',
    title: 'Elegir campus',
    children: [
      {
        path: 'usuarios',
        component: elegirCampusComponent,
      },
      {
        path: 'libros',
        component: elegirCampusComponent,
      },
      
    ]
  },
  {
    path: 'elegir-grado',
    title: 'Elegir grado',
    children: [
      {
        path: 'campus',
        component: elegirCampusComponent,
      },
      
    ]
  },
  {
    path: 'elegir-libro',
    title: 'Elegir libro',
    children: [
      {
        path: 'grado',
        component: elegirCampusComponent,
      },
      
    ]
  },
  {
    path: 'desgloce-usuarios',
    title: 'Desgloce de usuarios',
    children: [
      {
        path: 'general',
        component: desgloceUsuariosComponent,
      },
      {
        path: 'campus',
        component: desgloceUsuariosComponent,
      },
      
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class estadisticasRoutingModule {}
