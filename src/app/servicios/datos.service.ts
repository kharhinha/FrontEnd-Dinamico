import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http"
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatosService {
  //se inyecta en los constructores
  constructor(private http:HttpClient) { }

  obtenerDatos(): Observable<any>{
    //la llamada deberia ser a un URL
    return this.http.get('assets/data/data.json');
  }
}
