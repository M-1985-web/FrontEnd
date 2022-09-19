import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Skill } from '../model/skill';

@Injectable({
  providedIn: 'root',
})
export class SkillService {
  URL = 'https://backendmmm.herokuapp.com/skill';
  //URL = 'http://localhost:8080/skill/';

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<Skill[]> {
    //return this.httpClient.get<Skill[]>(this.URL + 'lista');
    return this.httpClient.get<Skill[]>(`${this.URL}/lista`);
  }

  public detail(id: number): Observable<Skill> {
    //return this.httpClient.get<Skill>(this.URL + `detail/${id}`);
    return this.httpClient.get<Skill>(`${this.URL}/detail/${id}`);
  }

  public save(ski: Skill): Observable<any> {
    //return this.httpClient.post<Skill>(this.URL + 'create', ski);
    return this.httpClient.post<Skill>(`${this.URL}/create`, ski);
  }

  public update(id: number, ski: Skill): Observable<any> {
    //return this.httpClient.put<any>(this.URL + `update/${id}`, ski);
    return this.httpClient.put<any>(`${this.URL}/update/${id}`, ski);
  }

  public delete(id: number): Observable<any> {
    //return this.httpClient.delete<any>(this.URL + `delete/${id}`);
    return this.httpClient.delete<any>(`${this.URL}/delete/${id}`);
  }
}
