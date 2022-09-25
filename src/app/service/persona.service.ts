
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../model/persona';

@Injectable({
  providedIn: 'root',
})
export class PersonaService {
  URL = 'https://appmartinportfolioback.herokuapp.com/persona';

  constructor(private http: HttpClient) {}

  public getPersona(): Observable<Persona> {
    return this.http.get<Persona>(this.URL + '/traer/perfil');
  }

  public editarPersona(persona: Persona): Observable<Persona> {
    return this.http.put<Persona>(`${this.URL}/editar`, persona);
  }
}
