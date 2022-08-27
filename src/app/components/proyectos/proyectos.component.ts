import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/service/sproyecto.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css'],
})
export class ProyectosComponent implements OnInit {
  proyec: Proyecto[] = [];
  isLogged = false;

  constructor(
    private sProyecto: SProyectoService,
    private tokenService: TokenService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cargarProyectos();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarProyectos(): void {
    this.sProyecto.list().subscribe((data) => {
      this.proyec = data;
    });
  }

  delete(id?: number) {
    if (id != undefined) {
      this.sProyecto.delete(id).subscribe(
        (data) => {
          alert('se borro con exito el proyecto');
          this.router.navigate(['']);
          
        },
        (err) => {
          alert('no se pudo eliminar el proyecto');
          this.router.navigate(['']);
        }
      );
    }
  }
}
