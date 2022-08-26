export class SoftSkill {
  id?: number;
  nombreS: string;
  capacidadS: number;
  tipoS: string;

  constructor(nombre: string, capacidad: number, tipo: string) {
    this.nombreS = nombre;
    this.capacidadS = capacidad;
    this.tipoS = tipo;
  }
}
