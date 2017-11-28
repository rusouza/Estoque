import { Component, OnInit } from '@angular/core';

import {ComputadorService} from '../shared/computador.service';
import { Computador } from '../shared/computador.model';

@Component({
  selector: 'app-computador-list',
  templateUrl: './computador-list.component.html',
  styleUrls: ['./computador-list.component.css']
})
export class ComputadorListComponent implements OnInit {
  listaComputador: Computador[];
  constructor(private computadorService: ComputadorService) { }

  ngOnInit() {
    var x = this.computadorService.getData();
    x.snapshotChanges().subscribe(item => {
      this.listaComputador = [];
      item.forEach(element => {
        var y = element.payload.toJSON();
        y['$key'] = element.key;
        this.listaComputador.push(y as Computador);
      });
    });
  }

  onItemClick(computador: Computador) {
    this.computadorService.selectedComputador = Object.assign({}, computador);
  }

}
