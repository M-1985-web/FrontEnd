import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css'],
})
export class NewExperienciaComponent implements OnInit {
  nombreExperiencia: string;
  descripcionExperiencia: string;
  imgExperiencia: string = '../../../assets/experiencia/6argprogr-logo.png';
  isLogged = false;

  constructor(
    private sExperiencia: SExperienciaService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onCreate(): void {
    const expe = new Experiencia(
      this.nombreExperiencia,
      this.descripcionExperiencia,
      this.imgExperiencia
    );
    this.sExperiencia.save(expe).subscribe(
      (data) => {
        alert('Experiencia Añadida correctamente');
        this.router.navigate(['']);
      },
      (err) => {
        alert('Fallo no se agrego la experiencia');
        this.router.navigate(['']);
      }
    );
  }
}
