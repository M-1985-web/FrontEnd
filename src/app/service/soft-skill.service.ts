import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SoftSkill } from '../model/soft-skill';

@Injectable({
  providedIn: 'root',
})
export class SoftSkillService {
  URL = 'https://backendmmm.herokuapp.com/softskill/';
  //URL = 'http://localhost:8080/softskill/';

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<SoftSkill[]> {
    return this.httpClient.get<SoftSkill[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<SoftSkill> {
    return this.httpClient.get<SoftSkill>(this.URL + `detail/${id}`);
  }

  public save(ski: SoftSkill): Observable<any> {
    return this.httpClient.post<any>(this.URL + 'create', ski);
  }

  public update(id: number, ski: SoftSkill): Observable<any> {
    return this.httpClient.put<any>(this.URL + `update/${id}`, ski);
  }

  public delete(id: number): Observable<any> {
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
