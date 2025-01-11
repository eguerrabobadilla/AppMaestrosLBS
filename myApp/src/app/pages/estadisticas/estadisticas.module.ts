import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstadisticasPage } from './estadisticas.page';
import { IonicModule } from '@ionic/angular';
import { estadisticasRoutingModule } from './estadisticas-routing.module';
import { cardUsuariosComponent } from './components/main-widgets/card-usuarios/card-usuarios.component';
import { cardLibrosDescargadosComponent } from './components/card-libros-descargados/card-libros-descargados.component';
import { FormsModule } from '@angular/forms';
import { DataTablesModule } from "angular-datatables";
import { cardHoraUsoCampusComponent } from './components/main-widgets/card-hora-uso-campus/card-hora-uso-campus.component';
import { cardTotalLibrosComponent } from './components/main-widgets/card-total-libros/card-total-libros.component';
import { cardTopCampusComponent } from './components/main-widgets/card-top-campus/card-top-campus.component';
import { btnVerMasComponent } from './components/buttons/btn-ver-mas/btn-ver-mas.component';
import { btnExportarComponent } from './components/buttons/btn-exportar/btn-exportar.component';




@NgModule({

  declarations: [
    EstadisticasPage,
    cardUsuariosComponent,
    cardLibrosDescargadosComponent,
    cardHoraUsoCampusComponent,
    cardTotalLibrosComponent,
    cardTopCampusComponent,
    btnVerMasComponent,
    btnExportarComponent
  ],
  exports:[EstadisticasPage],
  imports: [
    estadisticasRoutingModule,
    CommonModule,
    IonicModule,
    FormsModule,
    DataTablesModule
  ]
})
export class EstadisticasPageModule { }
