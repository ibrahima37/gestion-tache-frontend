import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TachesRoutingModule } from './taches-routing-module';
import { CreerTacheComponent } from './creer-tache/creer-tache.component';
import { ListeTacheComponent } from './liste-tache/liste-tache.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TachesRoutingModule
  ]
})
export class TachesModule { }
