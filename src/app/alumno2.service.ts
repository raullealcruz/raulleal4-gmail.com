import { Injectable } from '@angular/core';

import { Observable, throwError} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class Alumno2Service {

  readonly URLget = 'http://localhost:3000/alumnos';
  readonly  URLputdel = 'http://localhost:3000/alumno/';
  readonly  URLputdel2 = 'http://localhost:3000/alumno/b/';
  readonly  URLputdel3 = 'http://localhost:3000/alumno/c/';
  readonly URLpost = 'http://localhost:3000/alumnoss';
  // headers = new HttpHeaders().set('Content-Type', 'application / json');
  constructor(private http: HttpClient) { }

  getAlumno2List() {
    return this.http.get(this.URLget);

  }

  postAlumno(data): Observable<any> {
    // @ts-ignore
    return this.http.post(this.URLpost, data).pipe( catchError(this.errorMgmt));
  }
  // tslint:disable-next-line:variable-name
  deletealumno(codigo) {
    return this.http.get(this.URLputdel2 + codigo);
  }
  putAlumno(data, id): Observable<any> {
    return this.http.put(this.URLputdel3 + id, data);
  }
  getAlumnoByNombre(nombre): Observable<any> {
    return this.http.get(this.URLputdel + nombre);
  }

  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status} \nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
