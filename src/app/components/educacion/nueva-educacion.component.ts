import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { EducacionService } from 'src/app/service/educacion.service';

@Component({
  selector: 'app-nueva-educacion',
  templateUrl: './nueva-educacion.component.html',
  styleUrls: ['./nueva-educacion.component.css'],
})
export class NuevaEducacionComponent implements OnInit {
  nombreEdu: string;
  descripcionEdu: string;

  constructor(
    private educacionService: EducacionService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  onCreate(): void {
    const educacion = new Educacion(this.nombreEdu, this.descripcionEdu);
    this.educacionService.save(educacion).subscribe(
      (data) => {
        alert('Educacion añadida correctamente');
        //vuelve al inicio
        this.router.navigate(['']);
      },
      (err) => {
        alert('No se pudo añadir la Educacion');
        this.router.navigate(['']);
      }
    );


  }
}
