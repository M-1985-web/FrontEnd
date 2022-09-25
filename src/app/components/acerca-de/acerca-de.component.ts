import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona';
import { TokenService } from 'src/app/service/token.service';
import { PersonaService } from '../../service/persona.service';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
})
export class AcercaDeComponent implements OnInit {
  //aca llamaria a nombre:, apellido:,img de persona, lo inicializamos
  //model
  //persona: Persona[] = [];

  persona: Persona = new Persona('', '', '', '', '');

  //el constructor llama al servicio
  constructor(
    private personaService: PersonaService,
    private tokenService: TokenService
  ) {}

  isLogged = false;

  ngOnInit(): void {
    //los metodos van entre parentesis
    //subcribe: conecta el observable con eventos observables
    //this.personaService.getPersona().subscribe(data =>{this.persona = data})
    this.personaService.getPersona().subscribe((data) => {
      this.persona = data})

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
}
