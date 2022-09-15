import { Component, OnInit } from '@angular/core';
import { SExperienciaService } from '../../service/s-experiencia.service';
import { TokenService } from '../../service/token.service';
import { Experiencia } from '../../model/experiencia';


@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css'],
})
export class ExperienciaComponent implements OnInit {
  expe: Experiencia[] = [];

  constructor(
    private sExperiencia: SExperienciaService,
    private tokenService: TokenService
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    //validar si estamos logeados o no
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarExperiencia(): void {
    this.sExperiencia.lista().subscribe((data) => {
      this.expe = data;
    });
  }

  delete(id?: number) {
    if (id != undefined) {
      this.sExperiencia.delete(id).subscribe(
        (data) => {
          this.cargarExperiencia();
        },
        (err) => {
          alert('No se pudo borrar la experiencia');
        }
      );
    }
  }
}
