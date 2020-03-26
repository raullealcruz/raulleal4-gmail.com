import { Component, OnInit } from '@angular/core';
import { AlumnosService } from '../alumnos.service';

@Component({
  selector: 'app-listalumno',
  templateUrl: './listalumno.component.html',
  styleUrls: ['./listalumno.component.css']
})
export class ListalumnoComponent implements OnInit {
  // tslint:disable-next-line:ban-types
  alumnos: Array<Object>;
  alumnos1;

  // es para agregar el servicio
  constructor(private servicioalumno: AlumnosService) {
    this.alumnos = [{id: 1, nombre: 'Raúl Leal', email: 'raullea@gmail.com', edad : 23},
    {id: 1, nombre: 'Gaudiel Garcia', email: 'Gaudiel@gmail.com', edad : 21},
    {id: 2, nombre: 'Martin Miguel', email: 'Martin@gmail.com', edad : 20},
    {id: 3, nombre: 'Sheldon Pablos', email: 'Sheldon@gmail.com', edad : 19}
  ]; }
  ngOnInit() {
   this.alumnos1 = this.servicioalumno.getAlumnos();
  }

}
