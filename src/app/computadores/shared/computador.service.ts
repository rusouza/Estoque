import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

import {Computador} from './computador.model';

@Injectable()
export class ComputadorService {
  computadorList: AngularFireList<any>;
  selectedComputador: Computador = new Computador;
  constructor(private firebase: AngularFireDatabase) { }

  getData() {
    this.computadorList = this.firebase.list('computadores');
    return this.computadorList;
  }

  inserirComputador(computador: Computador) {
    this.computadorList.push({
      marca: computador.marca,
      modelo: computador.modelo,
      placaMae: computador.placaMae,
      memoriaRam: computador.memoriaRam,
      hd: computador.hd,
      processador: computador.processador
    });
  }

  atualizarComputador(computador: Computador) {
    this.computadorList.update(computador.$key, {
      marca: computador.marca,
      modelo: computador.modelo,
      placaMae: computador.placaMae,
      memoriaRam: computador.memoriaRam,
      hd: computador.hd,
      processador: computador.processador
    });
  }

  apagarComputador(key: String) {
    this.computadorList.remove(key);
  }

}
