export class Persona {
  id!: number;
  nombre: string;
  apellido: string;
  imgurl: string;
  aboutme: string;
  oficio: string;

  constructor(
    nombre: string,
    apellido: string,
    imgurl: string,
    aboutme: string,
    oficio: string
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.imgurl = imgurl;
    this.aboutme = aboutme;
    this.oficio = oficio;
  }
}
