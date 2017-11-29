import { Injectable } from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';

import {Computador} from './computador.model';

@Injectable()
export class ComputadorService {
  computadorList: Computador[];
  selectedComputador: Computador = new Computador;
  constructor(private http: Http) { }

  getData() {
    this.http.get('http://localhost:5000/api/Computador').map((data: Response) => {
      return data.json() as Computador[];
    }).toPromise().then(x => {
      this.computadorList = x;
    });
  }

  inserirComputador(computador: Computador) {
    var body = JSON.stringify(computador);
    var headerOptions = new Headers({'Content-Type': 'application/json'});
    var requestOptions = new RequestOptions({method : RequestMethod.Post, headers: headerOptions});
    return this.http.post('http://localhost:5000/api/Computador', body, requestOptions).map(x => x.json());
  }

  atualizarComputador(id, computador) {
    var body = JSON.stringify(computador);
    var headerOptions = new Headers({ 'Content-Type': 'application/json' });
    var requestOptions = new RequestOptions({ method: RequestMethod.Put, headers: headerOptions });
    return this.http.put('http://localhost:5000/api/Computador/' + id,
      body, requestOptions).map(res => res.json());
  }

  apagarComputador(id: number) {
    return this.http.delete('http://localhost:5000/api/Computador/' + id).map(res => res.json());
  }

}
