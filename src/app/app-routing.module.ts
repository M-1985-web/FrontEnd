import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NuevaEducacionComponent } from './components/educacion/nueva-educacion.component';
import { EditarEducacionComponent } from './components/educacion/editar-educacion.component';
import { NewProyectComponent } from './components/proyectos/new-proyect/new-proyect.component';
import { EditproyectComponent } from './components/proyectos/editproyect/editproyect.component';
import { NewskillComponent } from './components/hardandsoftskills/newskill/newskill.component';
import { EditSkillComponent } from './components/hardandsoftskills/edit-skill/edit-skill.component';
import { EditsoftComponent } from './components/hardandsoftskills/editsoft/editsoft.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  // -- agregar New -- //
  { path: 'nuevaexp', component: NewExperienciaComponent },
  { path: 'newproyec', component: NewProyectComponent },
  { path: 'nuevaedu', component: NuevaEducacionComponent },
  { path: 'nuevaskill', component: NewskillComponent },
  // -- Editar exits -- //

  { path: 'editexp/:id', component: EditExperienciaComponent },
  { path: 'editedu/:id', component: EditarEducacionComponent },
  { path: 'editproyec/:id', component: EditproyectComponent },
  { path: 'editskill/:id', component: EditSkillComponent },
  { path: 'editsoft/:id', component: EditsoftComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
