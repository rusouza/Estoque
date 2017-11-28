import { Component, OnInit } from '@angular/core';

import {ComputadorService} from './shared/computador.service';
import {Computador} from './shared/computador.model';

@Component({
  selector: 'app-computadores',
  templateUrl: './computadores.component.html',
  styleUrls: ['./computadores.component.css'],
  providers : [ComputadorService]
})
export class ComputadoresComponent implements OnInit {

  constructor(private computadorService: ComputadorService) { }

  ngOnInit() {
  }

}
