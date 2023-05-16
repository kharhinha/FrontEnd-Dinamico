import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppModule } from './app.module';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { AgregarExpComponent } from './componentes/experiencia/agregar-exp.component';
import { EditarExpComponent } from './componentes/experiencia/editar-exp.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaExperiencia', component: AgregarExpComponent },
  { path: 'editarExperiencia/:id', component: EditarExpComponent },
  { path: 'nuevaEducacion', component: NewEducacionComponent },
  { path: 'editEducacion/:id', component: EditEducacionComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
