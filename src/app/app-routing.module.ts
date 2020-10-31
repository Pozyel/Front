import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CadastroFuncComponent} from './cadastro-func/cadastro-func.component';
import {CadastroProComponent} from './cadastro-pro/cadastro-pro.component';
import {ConsultaComponent} from './consulta/consulta.component';
import {ConsultaProComponent} from './consulta-pro/consulta-pro.component';
const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'cadastrofunc', component: CadastroFuncComponent
  },
  {
    path: 'cadastropro', component: CadastroProComponent
  },
  {
    path: 'consulta', component: ConsultaComponent
  },
  {
    path: 'consultaPro', component: ConsultaProComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
