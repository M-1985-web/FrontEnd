import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { LogoArgProgrComponent } from './components/logo-arg-progr/logo-arg-progr.component';
import { BannerComponent } from './components/banner/banner.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HardandsoftskillsComponent } from './components/hardandsoftskills/hardandsoftskills.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { FooterComponent } from './components/footer/footer.component';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { interceptorProvider } from './service/interceptorservice';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NuevaEducacionComponent } from './components/educacion/nueva-educacion.component';
import { EditarEducacionComponent } from './components/educacion/editar-educacion.component';
import { NewProyectComponent } from './components/proyectos/new-proyect/new-proyect.component';
import { EditproyectComponent } from './components/proyectos/editproyect/editproyect.component';
import { NewskillComponent } from './components/hardandsoftskills/newskill/newskill.component';
import { EditsoftComponent } from './components/hardandsoftskills/editsoft/editsoft.component';
import { EditSkillComponent } from './components/hardandsoftskills/edit-skill/edit-skill.component';
import { EditacercadeComponent } from './components/acerca-de/editacercade/editacercade.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoArgProgrComponent,
    BannerComponent,
    AcercaDeComponent,
    ExperienciaComponent,
    EducacionComponent,
    HardandsoftskillsComponent,
    ProyectosComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    NewExperienciaComponent,
    EditExperienciaComponent,
    NuevaEducacionComponent,
    EditarEducacionComponent,
    NewProyectComponent,
    EditproyectComponent,
    NewskillComponent,
    EditsoftComponent,
    EditSkillComponent,
    EditacercadeComponent
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule,
  ],

  providers: [interceptorProvider],
  bootstrap: [AppComponent],
})
export class AppModule { }
