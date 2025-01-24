import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { FolderComponent } from 'src/app/components/folder/folder.component';
import { visorLibroComponent } from 'src/app/components/visor-libro/visor-libro.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'libros', 
    pathMatch: 'full',   
  },
  {
    path: '',         
    component: HomePage,
    children: [
      {
        path: 'libros',          
        component: FolderComponent,
      },
      {
        path: 'secuencias',
        loadChildren: () =>
          import('../secuencias/secuencias.module').then((m) => m.SecuenciasPageModule),
      },
      {
        path: 'estadisticas',

        // loadChildren: () =>
        //   import('../tiempo-de-uso-de-docentes/tiempo-de-uso-de-docentes.module').then((m) => m.TiempoDeUsoDeDocentesModule),
        loadChildren: () =>
          import('../estadisticas/estadisticas.module').then((m) => m.EstadisticasPageModule),
      },
      {
        path: 'visor-libros',          
        component: visorLibroComponent,
      },
    ],
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
