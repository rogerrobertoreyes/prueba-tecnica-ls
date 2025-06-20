
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Formulario } from '../models/formulario.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = '/api'; 

  constructor(private http: HttpClient) {}

  getFormularios(): Observable<Formulario[]> {
    return this.http.get<Formulario[]>(`${this.apiUrl}/formularios`);
  }

  getFormularioById(id: number): Observable<Formulario> {
    return this.http.get<Formulario>(`${this.apiUrl}/formularios/${id}`);
  }
}
