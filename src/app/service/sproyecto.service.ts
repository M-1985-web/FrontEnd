import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Proyecto } from '../model/proyecto';


@Injectable({
  providedIn: 'root',
})
export class SProyectoService {
  // private
  URL = 'https://appmartinportfolioback.herokuapp.com/proy';
  //URL = 'http://localhost:8080/proyec/';

  constructor(private httpClient: HttpClient) {}

  //trae la lista
  public list(): Observable<Proyecto[]> {
    //return this.httpClient.get<Proyecto[]>(this.URL + 'lista');
    return this.httpClient.get<Proyecto[]>(`${this.URL}/lista`);
  }

  public buscar(id: number): Observable<Proyecto> {
    //return this.httpClient.get<Proyecto>(this.URL + `buscar/${id}`);
    return this.httpClient.get<Proyecto>(`${this.URL}/buscar/${id}`);
  }

  public save(proyec: Proyecto): Observable<Proyecto> {
    //return this.httpClient.post<any>(this.URL + 'create', proyec);
    return this.httpClient.post<Proyecto>(`${this.URL}/create`, proyec);
  }

  //editar
  public update(id: number, proyec: Proyecto): Observable<Proyecto> {
    return this.httpClient.put<any>(`${this.URL}/update/${id}`, proyec);
  }

  public delete(id: number): Observable<any> {
    //return this.httpClient.delete<any>(this.URL + `delete/${id}`);
    return this.httpClient.delete<any>(`${this.URL}/delete/${id}`);
  }
}
