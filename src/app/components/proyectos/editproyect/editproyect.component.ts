import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { SProyectoService } from 'src/app/service/sproyecto.service';
import { TokenService } from 'src/app/service/token.service';



@Component({
  selector: 'app-editproyect',
  templateUrl: './editproyect.component.html',
  styleUrls: ['./editproyect.component.css'],
})
export class EditproyectComponent implements OnInit {
  proyect: Proyecto = null;
  isLogged = false;

  constructor(
    private ProyectoS: SProyectoService,
    private router: Router,
    private activateRouter: ActivatedRoute,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

    const id = this.activateRouter.snapshot.params['id'];
    this.ProyectoS.buscar(id).subscribe(
      (data) => {
        this.proyect = data;
      },
      (err) => {
        alert('no se pudo encontrar el proyecto');
        this.router.navigate(['']);
      }
    );
  }

  onUpdate(): void {
    const id = this.activateRouter.snapshot.params['id'];
    this.ProyectoS.update(id, this.proyect).subscribe(
      (data) => {
        alert('Proyecto actualizado con exito');
        this.router.navigate(['']);
      },
      (err) => {
        alert('No se pudo actualizar el proyect');
        this.router.navigate(['']);
      }
    );
  }
}
