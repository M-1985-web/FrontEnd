import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-editacercade',
  templateUrl: './editacercade.component.html',
  styleUrls: ['./editacercade.component.css'],
})
export class EditacercadeComponent implements OnInit {
  persona: Persona;

  constructor(
    public personaService: PersonaService,
    private tokenService: TokenService,
    //private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.personaService.getPersona().subscribe((data) => {
      this.persona = data;
    });

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  onUpdate(): void {
    //const id = this.activatedRoute.snapshot.params['id'];

    this.personaService.editarPersona(this.persona).subscribe(
      (data) => {
        this.router.navigate(['']);
        alert('Persona modificada con exito!!!');
      },
      (err) => {
        alert('No se pudo actualizar');
        this.router.navigate(['']);
      }
    );
  }

}
