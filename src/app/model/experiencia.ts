export class Experiencia {
  id? : number;
  nombreExperiencia : string;
  descripcionExperiencia : string;
  imgExperiencia: string;

  constructor(
    nombreExperiencia: string,
    descripcionExperiencia: string,
    imgExperiencia: string
  ) {
    this.nombreExperiencia = nombreExperiencia;
    this.descripcionExperiencia = descripcionExperiencia;
    this.imgExperiencia = imgExperiencia;
  }
}
