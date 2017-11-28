import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';

import {ComputadorService} from '../shared/computador.service';

import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-computador',
  templateUrl: './computador.component.html',
  styleUrls: ['./computador.component.css']
})
export class ComputadorComponent implements OnInit {

  constructor(private computadorService: ComputadorService, private toastr: ToastrService) { }

  ngOnInit() {
    this.resetForm();
  }

  onSubmit(form: NgForm) {
    if (form.value.comupatorId === null) {
      this.computadorService.inserirComputador(form.value).subscribe(data => {
        this.resetForm(form);
        this.computadorService.getData();
        this.toastr.success('Um Novo Computador foi adicionado com Sucesso', 'Computador Registrado');
      })
    } else {
      this.computadorService.atualizarComputador(form.value.EmployeeID, form.value)
      .subscribe(data => {
        this.resetForm(form);
        this.computadorService.getData();
        this.toastr.info('Computador Atualizado com Sucesso!', 'Computador Registrado');
      });
    }
  }

  resetForm(form?: NgForm) {
    if (form != null) {
      form.resetForm();
    }
    this.computadorService.selectedComputador = {
      computadorId : null,
      marca : '',
      modelo : '',
      placaMae : '',
      memoriaRam : '',
      hd : '',
      processador : ''
   };
  }

}