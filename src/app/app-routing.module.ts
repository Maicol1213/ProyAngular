import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SolicitarCitaComponent } from './solicitar-cita/solicitar-cita.component';
import { ListarCitasComponent } from './listar-citas/listar-citas.component';

const routes: Routes = [
  { path: 'solicitar-cita', component: SolicitarCitaComponent },
  { path: 'listar-citas', component: ListarCitasComponent },
  { path: '', redirectTo: '/solicitar-cita', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

