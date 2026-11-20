import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreerProfileComponent } from './creer-profile/creer-profile.component';
import { ListeProfileComponent } from './liste-profile/liste-profile.component';

const routes: Routes = [
  { path: 'creer', component: CreerProfileComponent },
  { path: 'liste', component: ListeProfileComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
