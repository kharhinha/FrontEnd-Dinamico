import { HttpClient } from "@angular/common/http";
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Educacion } from "../model/educacion";

@Injectable({
    providedIn: 'root'
})
export class EducacionService {
    edu ='http://localhost:8080/educacion';
    constructor(private httpClient: HttpClient) { }

    public crear(educacion:Educacion):Observable<any> {
        return this.httpClient.post<any>(this.edu + '/new',educacion);
    }

    public listar():Observable<Educacion[]> {
        return this.httpClient.get<Educacion[]>(this.edu + '/listar');
    }

    public buscar(id: string):Observable<Educacion> {
        return this.httpClient.get<Educacion>(this.edu + `/buscar/${id}`);
    }

    public borrar(id: string):Observable<any> {
        return this.httpClient.delete<any>(this.edu + `/borrar/${id}`);
    }

    public modificar(id: string, educacion: Educacion):Observable<Educacion> {
        return this.httpClient.put<any>(this.edu + `/cambiar/${id}`, educacion);

    }
}
