import { Component, OnInit } from '@angular/core';
import { Alumno2Service} from '../alumno2.service';
import {FormGroup, FormControl, FormBuilder, NgForm, NgModel, Validators, NgModelGroup} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {error} from 'util';
import {Observable} from 'rxjs';


// @ts-ignore
@Component({
  selector: 'app-alumnos2',
  templateUrl: './alumnos2.component.html',
  styleUrls: ['./alumnos2.component.css']
})
export class Alumnos2Component implements OnInit {

  constructor(private alumnoservicio: Alumno2Service, private fb: FormBuilder) { }

  alu;
  alumnoForm: FormGroup;
  // tslint:disable-next-line:variable-name


  ngOnInit() {
    this.alumnoForm = this.fb.group(
      {
        id: new FormControl(''),
        nombre: new FormControl(''),
        codigo: new FormControl(''),
        });
  }

  listarAlumnos() {
    this.alu = this.alumnoservicio.getAlumno2List();
  }


  OnDelete() {
   if (confirm('Are you sure de borrar?') === true) {
      this.alumnoservicio.deletealumno(this.alumnoForm.get('codigo').value).subscribe(
       (res) => {
         console.log('Alumno eliminado');
         // tslint:disable-next-line:no-shadowed-variable
       }, (error) => {
         console.log('Alumno no encontrado');
       }
     );
   }
  }
  BuscarAlumno() {
    this.alumnoservicio.getAlumnoByNombre(this.alumnoForm.get('nombre').value).subscribe(
      (res) => {
        this.alumnoForm.get('codigo').setValue(res.codigo),
          this.alumnoForm.get('id').setValue(res._id),
        console.log('Alumno buscado');
      }, (error) => {
        console.log('Alumno no encontrado');
      }
    );
  }
  modificarAlumno() {
    if (confirm('Are you sure de modifi?') === true) {
      this.alumnoservicio.putAlumno(this.alumnoForm.value, this.alumnoForm.get('id').value).subscribe(
        (res) => {
          console.log('Alumno modificado');
        },
        // tslint:disable-next-line:no-shadowed-variable
        (error) => {
          console.log('pos error');
        }
      );
    }
  }
  crearAlumno() {
  if (confirm('Are you sure de crear nuevo?') === true) {
    // tslint:disable-next-line:no-shadowed-variable
    this.alumnoservicio.postAlumno(this.alumnoForm.value).subscribe((res) => {
      console.log('Alumno creado!');
      // tslint:disable-next-line:no-shadowed-variable
    }, (error) => {
      console.log(error);
    });
  }
}
}

