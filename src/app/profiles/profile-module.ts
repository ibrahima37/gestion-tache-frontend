import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing-module';
import { CreerProfileComponent } from './creer-profile/creer-profile.component';
import { ListeProfileComponent } from './liste-profile/liste-profile.component';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ProfileRoutingModule
  ]
})
export class profileModule { }
