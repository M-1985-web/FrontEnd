export class persona {
  //con el signo de interrogacion le estamos diciendo que ese dato no es necesario,
  //el id es autogestionado
  id? : number;
  nombre: String;
  apellido: String;
  img: String;

  constructor(nombre: String, apellido: String, img: string) {
    //lo inicializamos
    this.nombre = nombre;
    this.apellido = apellido;
    this.img = img;
  }
}
