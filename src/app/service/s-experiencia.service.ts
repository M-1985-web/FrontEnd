import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Experiencia } from '../model/experiencia';

@Injectable({
  providedIn: 'root',
})
export class SExperienciaService {
  //private
  //URL = 'http://localhost:8080/experiencia/';
  URL = 'https://appmartinportfolioback.herokuapp.com/exp';

  constructor(private httpClient: HttpClient) {}

  //es un array de experiencia primer metodo
  //cambio this.expURL local
  //por this.URL produccion
  public lista(): Observable<Experiencia[]> {
    //return this.httpClient.get<Experiencia[]>(this.URL + 'lista');
    return this.httpClient.get<Experiencia[]>(`${this.URL}/lista`);
  }

  //segundo metodo detalle por id
  public detail(id: number): Observable<Experiencia> {
    //return this.httpClient.get<Experiencia>(this.URL + `detail/${id}`);
    return this.httpClient.get<Experiencia>(`${this.URL}/detail/${id}`);
  }

  //metodo guardar y crear un nuevo registro en bd
  public save(experiencia: Experiencia): Observable<Experiencia> {
    //return this.httpClient.post<Experiencia>(this.URL + 'create', experiencia);
    return this.httpClient.post<Experiencia>(`${this.URL}/create`, experiencia);
  }

  //metodo para actualizar , poner editar
  public update(id: number, experiencia: Experiencia): Observable<Experiencia> {
    //return this.httpClient.put<any>(this.URL + `update/${id}`, experiencia);
    return this.httpClient.put<any>(`${this.URL}/update/${id}`, experiencia);
  }

  //metodo borrar
  public delete(id: number): Observable<any> {
    //return this.httpClient.delete<any>(this.URL + `delete/${id}`);
    return this.httpClient.delete<any>(`${this.URL}/delete/${id}`);
  }
}
