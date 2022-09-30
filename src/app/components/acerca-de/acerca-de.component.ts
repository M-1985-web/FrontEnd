import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-acerca-de',
  templateUrl: './acerca-de.component.html',
  styleUrls: ['./acerca-de.component.css'],
})
export class AcercaDeComponent implements OnInit {


  constructor() {}



  ngOnInit(): void {
    //los metodos van entre parentesis
    //subcribe: conecta el observable con eventos observables
    //this.personaService.getPersona().subscribe(data =>{this.persona = data})

  }
}
