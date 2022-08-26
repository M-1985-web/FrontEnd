export class Proyecto {
  id?: number;
  titulo: string;
  descripcionP: string;
  img: string;

  constructor(titulo: string, descripcionP: string, img: string) {
    this.titulo = titulo;
    this.descripcionP = descripcionP;
    this.img = img;
  }
}
