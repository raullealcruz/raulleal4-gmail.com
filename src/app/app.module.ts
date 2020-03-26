
import {RouterModule, Routes} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AlumnosService } from './alumnos.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { Alumno2Service} from './alumno2.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AcercadeComponent } from './acercade/acercade.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { InicioComponent } from './inicio/inicio.component';
import { ListalumnoComponent } from './listalumno/listalumno.component';
import { DetallesComponent } from './detalles/detalles.component';
import { Alumnos2Component } from './alumnos2/alumnos2.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

const rutas: Routes = [
  {path: 'Inicio', component: InicioComponent},
  {path: 'Acercade', component: AcercadeComponent},
  {path: 'Listaalumno', component: ListalumnoComponent},
  {path: 'Detalles/:id-alum', component: DetallesComponent},
  {path: '', component: InicioComponent, pathMatch: 'full'},
  {path: '**', redirectTo: 'Inicio'}
  ];

@NgModule({
  declarations: [
    AppComponent,
    AcercadeComponent,
    EncabezadoComponent,
    InicioComponent,
    ListalumnoComponent,
    DetallesComponent,
    Alumnos2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot((rutas)),
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [AlumnosService , Alumno2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }

