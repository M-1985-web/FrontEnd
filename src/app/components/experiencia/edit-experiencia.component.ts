import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-edit-experiencia',
  templateUrl: './edit-experiencia.component.html',
  styleUrls: ['./edit-experiencia.component.css'],
})

//aca hacemos la logica del componente
export class EditExperienciaComponent implements OnInit {
  experiencia: Experiencia = null;
  isLogged = false;

  constructor(
    private sExperiencia: SExperienciaService,
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private tokenService: TokenService
  ) {}

  ngOnInit(): void {
     if (this.tokenService.getToken()) {
       this.isLogged = true;
     } else {
       this.isLogged = false;
     }

    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.detail(id).subscribe(
      (data) => {
        this.experiencia = data;
      },
      (err) => {
        alert('Error al modificar la experiencia');
        this.router.navigate(['']);
      }
    );
  }

  //actualizar
  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sExperiencia.update(id, this.experiencia).subscribe(
      (data) => {
        this.router.navigate(['']);
      },
      (err) => {
        alert('Error al modificar la experiencia');
        this.router.navigate(['']);
      }
    );
  }
}
