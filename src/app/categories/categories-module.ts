import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategoriesRoutingModule } from './categories-routing-module';
import { CreerCategorieComponent } from './creer-categorie/creer-categorie.component';
import { ListeCategorieComponent } from './liste-categorie/liste-categorie.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    CategoriesRoutingModule,
    RouterModule
  ]
})
export class CategoriesModule { }
