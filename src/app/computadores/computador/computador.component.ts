import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import {ComputadorService} from '../shared/computador.service';

@Component({
  selector: 'app-computador',
  templateUrl: './computador.component.html',
  styleUrls: ['./computador.component.css']
})
export class ComputadorComponent implements OnInit {

  constructor(private computadorService: ComputadorService) { }

  ngOnInit() {
    // this.resetForm();
  }

  onSubmit(form: NgForm) {
    if (form.value.$key === '') {
      this.computadorService.inserirComputador(form.value);
    } else {
      this.computadorService.atualizarComputador(form.value);
    }
    // this.resetForm(form);
  }

  onDelete(form: NgForm) {
    if (confirm('Você tem certeza que quer apagar ?') === true) {
      this.computadorService.apagarComputador(form.value.$key);
    }
  }

  // resetForm(form?: NgForm) {
  //   if (form != null) {
  //     form.resetForm();
  //   }
  //   this.computadorService.selectedComputador = {
  //     $key = '',
  //     marca = '',
  //     modelo = '',
  //     placaMae = '',
  //     memoriaRam = '',
  //     hd = '',
  //     processador = ''
  //   };
  // }

}
