import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.component.html',
  styleUrls: ['./detalles.component.css']
})
export class DetallesComponent implements OnInit {
  // tslint:disable-next-line:ban-types
  alumnos: Array<Object>;
  // tslint:disable-next-line:ban-types
  alumnoencontrado: Object;
  // tslint:disable-next-line:ban-types
  valorabuscar: Number;

  constructor(private ruta: ActivatedRoute) {
    this.alumnos = [{id: 1, nombre: 'Raúl Leal', email: 'raulleal@gmail.com', edad : 23},
      {id: 2, nombre: 'Gaudiel Garcia', email: 'Gaudiel@gmail.com', edad : 21},
      {id: 3, nombre: 'Martin Miguel', email: 'Martin@gmail.com', edad : 20},
      {id: 4, nombre: 'Sheldon Pablos', email: 'Sheldon@gmail.com', edad : 19}
    ]; }

  ngOnInit() {
    this.ruta.params.subscribe(params => {this.valorabuscar = params['id-alum'];
                                          this.alumnoencontrado = this.buscar();
    });
  }
  filtrarpor(alumnos) {
    // tslint:disable-next-line:triple-equals
  return alumnos.id == this;
  }

  buscar() {
    return this.alumnos.filter(this.filtrarpor, this.valorabuscar)[0];
  }

}
