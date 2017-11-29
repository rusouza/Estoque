import { Component, OnInit } from '@angular/core';

import {ComputadorService} from '../shared/computador.service';
import { Computador } from '../shared/computador.model';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-computador-list',
  templateUrl: './computador-list.component.html',
  styleUrls: ['./computador-list.component.css']
})
export class ComputadorListComponent implements OnInit {
  listaComputador: Computador[];
  constructor(private computadorService: ComputadorService, private toastr: ToastrService) { }

  ngOnInit() {
    this.computadorService.getData();
  }

  onItemClick(computador: Computador) {
    this.computadorService.selectedComputador = Object.assign({}, computador);
  }

  showForEdit(computador: Computador) {
    this.computadorService.selectedComputador = Object.assign({}, computador);
  }

  onDelete(id: number) {
    if (confirm('Você tem certeza que deseja apagar ?') == true) {
      this.computadorService.apagarComputador(id)
      .subscribe(x => {
        this.computadorService.getData();
        this.toastr.warning('Computador Apagado com Sucesso!', 'Computador Registrado');
      });
    }
  }

}