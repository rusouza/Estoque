import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ComputadoresComponent } from './computadores/computadores.component';
import { ComputadorComponent } from './computadores/computador/computador.component';
import { ComputadorListComponent } from './computadores/computador-list/computador-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ComputadoresComponent,
    ComputadorComponent,
    ComputadorListComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
