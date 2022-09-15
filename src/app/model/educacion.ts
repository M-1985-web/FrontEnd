//aca replicamos el modelo de entity
//el string va con letra minuscula a diferencia del back
export class Educacion {
  id?: number;
  nombreEdu: string;
  descripcionEdu: string;
  imgEdu: string;

  constructor(nombreEdu: string, descripcionEdu: string, imgEdu: string) {
    //aca lo inicializamos
    this.nombreEdu = nombreEdu;
    this.descripcionEdu = descripcionEdu;
    this.imgEdu = imgEdu;
  }
}
