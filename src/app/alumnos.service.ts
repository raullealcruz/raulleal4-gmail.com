import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(
    private  http: HttpClient  // se genera en automatico el objeto http
  ) { }

  getAlumnos() {
return this.http.get('/assets/json/lista-alumnos.json');
}
}
