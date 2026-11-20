import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreerTacheComponent } from './creer-tache/creer-tache.component';
import { ListeTacheComponent } from './liste-tache/liste-tache.component';

const routes: Routes = [
  { path: 'creer', component: CreerTacheComponent },
  { path: 'liste', component: ListeTacheComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TachesRoutingModule { }
