import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-logo-arg-progr',
  templateUrl: './logo-arg-progr.component.html',
  styleUrls: ['./logo-arg-progr.component.css']
})
export class LogoArgProgrComponent implements OnInit {
  isLogged = false;


  //aca le inyectamos servicio de ruteo
  constructor(private router:Router, private tokenService:TokenService) { }

  //aca obtiene el token
  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    }else {
      this.isLogged = false;
    }
  }

  onLogOut(): void{
    this.tokenService.logOut();
    window.location.reload();
  }

  login() {
    this.router.navigate(['/login'])
  }

}
