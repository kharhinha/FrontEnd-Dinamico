import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';
@Injectable({
  providedIn: 'root'
})
export class ExperienciaService {
  exp ='http://localhost:8080/experiencia'
  constructor(private httpClient: HttpClient) { }

  public crear(experiencia:Experiencia):Observable<any>{
   return this.httpClient.post<any>(this.exp + '/new',experiencia);
  }

  public listar():Observable<Experiencia[]>{
    return this.httpClient.get<Experiencia[]>(this.exp +'/listar');
  }

  public buscar(id:string):Observable<Experiencia>{
    return this.httpClient.get<Experiencia>(this.exp + `/buscar/${id}`);
  }

  public borrar(id:string):Observable<any>{
    return this.httpClient.delete<any>(this.exp + `/borrar/${id}`);
  }

  public modificar(id:string, experiencia:Experiencia):Observable<any>{
    return this.httpClient.put<any>(this.exp + `/cambiar/${id}`,experiencia);

  }
}
