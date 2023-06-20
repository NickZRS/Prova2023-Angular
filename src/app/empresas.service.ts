import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Empresas } from './empresas';

@Injectable({
  providedIn: 'root'
})
export class EmpresasService {

  url = "http://localhost:3000/empresas"

  constructor(private http: HttpClient) { }

  getEmpresas(): Observable<Empresas[]>{
    return this.http.get<Empresas[]>(this.url);
  }

  save( empresas: Empresas): Observable<Empresas>{
    return this.http.post<Empresas>(this.url, empresas);
  }

  remove(empresas: Empresas): Observable<void>{
    return this.http.delete<void>(`${this.url}/${empresas.id}`);

  }
}
