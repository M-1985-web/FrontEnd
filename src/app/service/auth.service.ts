import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { LoginUsuario } from '../model/login-usuario';
import { JwtDto } from '../model/jwt-dto';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  //le pasamos el endpoint del back
  //trab local
  //authURL = 'http://localhost:8080/auth/';

  //trabajo en producion private
  // le saque el path
  authURL = 'https://appmartinportfolioback.herokuapp.com/auth';

  constructor(private httpClient: HttpClient) {}

  //metodo nuevo
  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any> {
    return this.httpClient.post<any>(this.authURL + '/nuevo', nuevoUsuario);
  }

  //metodo login
  public login(loginUsuario: LoginUsuario): Observable<JwtDto> {
    return this.httpClient.post<JwtDto>(this.authURL + '/login', loginUsuario);
  }
}
