import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  per ='http://localhost:8080/persona';
  constructor(private httpClient: HttpClient) { }

  public buscar(id:string):Observable<Persona>{
    return this.httpClient.get<Persona>(this.per + `/buscar/${id}`);
  }
}


