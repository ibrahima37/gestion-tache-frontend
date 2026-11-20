import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreerCategorieComponent } from './creer-categorie/creer-categorie.component';
import { ListeCategorieComponent } from './liste-categorie/liste-categorie.component';

const routes: Routes = [
  { path: 'creer', component: CreerCategorieComponent },
  { path: 'liste', component: ListeCategorieComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriesRoutingModule { }
