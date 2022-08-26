import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/service/sproyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-new-proyect',
  templateUrl: './new-proyect.component.html',
  styleUrls: ['./new-proyect.component.css'],
})
export class NewProyectComponent implements OnInit {
  titulo: string;
  PDescripcion: string;
  img: string;
  isLogged = false;

  constructor(
    private proyec: SProyectoService,
    private router: Router,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onCreate() {
    const proyect = new Proyecto(this.titulo, this.PDescripcion, this.img);
    this.proyec.save(proyect).subscribe(
      (data) => {
        alert('Proyecto agregado con exito');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Error al guardar el proyecto');
        this.router.navigate(['']);
      }
    );
  }


  
}
