import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistereComponent } from './registere/registere.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { ListePersonneComponent } from './liste-personne/liste-personne.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'registere', component: RegistereComponent},
  {path: 'forgot-password', component: ForgotPasswordComponent},
  {path: 'liste', component: ListePersonneComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonneRoutingModule { }
