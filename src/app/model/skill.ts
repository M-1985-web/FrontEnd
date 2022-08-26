import { NumberSymbol } from '@angular/common';

export class Skill {
  id?: number;
  nombreS: string;
  capacidadS: number;
  tipoS: string;

  constructor(nombreS: string, capacidadS: number, tipoS: string) {
    this.nombreS = nombreS;
    this.capacidadS = capacidadS;
    this.tipoS = tipoS;
  }
}
