import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CadastroFuncComponent } from './cadastro-func/cadastro-func.component';
import {RouterModule, Routes} from '@angular/router';
import { CadastroProComponent } from './cadastro-pro/cadastro-pro.component';
import { ConsultaComponent } from './consulta/consulta.component';
import { ConsultaProComponent } from './consulta-pro/consulta-pro.component';
import { HomeComponent } from './home/home.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CadastroFuncComponent,
    CadastroProComponent,
    ConsultaComponent,
    ConsultaProComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
