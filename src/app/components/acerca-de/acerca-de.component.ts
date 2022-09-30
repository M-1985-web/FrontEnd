import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css']
})
export class AcercaDeComponent implements OnInit {
  //aca llamaria a nombre:, apellido:,img de persona, lo inicializamos
  //model

  //persona: persona = new persona("", "", "");

  //el constructor llama al servicio
  //constructor(public personaService: PersonaService) { }

  ngOnInit(): void {
    //los metodos van entre parentesis
    //subcribe: conecta el observable con eventos observables
    //this.personaService.getPersona().subscribe(data =>{this.persona = data})
  }

}
