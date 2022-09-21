import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SoftSkill } from '../model/soft-skill';

@Injectable({
  providedIn: 'root',
})
export class SoftSkillService {
  URL = 'https://appbackap.herokuapp.com/softskills/';
  //URL = 'http://localhost:8080/softskill/';

  constructor(private httpClient: HttpClient) {}

  public lista(): Observable<SoftSkill[]> {
    //return this.httpClient.get<SoftSkill[]>(this.URL + 'lista');
    return this.httpClient.get<SoftSkill[]>(`${this.URL}lista`);
  }

  public detail(id: number): Observable<SoftSkill> {
    //return this.httpClient.get<SoftSkill>(this.URL + `detail/${id}`);
    return this.httpClient.get<SoftSkill>(`${this.URL}detail/${id}`);
  }

  public save(softSkill: SoftSkill): Observable<any> {
    //return this.httpClient.post<SoftSkill>(this.URL + 'create', ski);
    return this.httpClient.post<SoftSkill>(`${this.URL}create`, softSkill);
  }

  public update(id: number, softSkill: SoftSkill): Observable<any> {
    //return this.httpClient.put<any>(this.URL + `update/${id}`, ski);
    return this.httpClient.put<any>(`${this.URL}update/${id}`, softSkill);
  }

  public delete(id: number): Observable<any> {
    //return this.httpClient.delete<any>(this.URL + `delete/${id}`);
    return this.httpClient.delete<any>(`${this.URL}delete/${id}`);
  }
}
