import { Component } from '@angular/core';
import { ListePersonneComponent } from '../../personne/liste-personne/liste-personne.component';
import { ListeTacheComponent } from '../../taches/liste-tache/liste-tache.component';
import { CommonModule } from '@angular/common';
import { AppbarComponent } from '../appbar/appbar.component';
import { DrawerComponent } from '../drawer/drawer.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    DrawerComponent,
    AppbarComponent,
    ListePersonneComponent, 
    ListeTacheComponent, 
    CommonModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  isLoading: boolean = false;

  selectedPersonneId: string | null = null;

  onPersonneSelected(personneId: string) {
    this.selectedPersonneId = personneId;
  }

}