import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { ComputadoresComponent } from './computadores/computadores.component';
import { ComputadorComponent } from './computadores/computador/computador.component';
import { ComputadorListComponent } from './computadores/computador-list/computador-list.component';
import {environment} from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    ComputadoresComponent,
    ComputadorComponent,
    ComputadorListComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
