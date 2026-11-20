import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PersonneDto } from '../../core/dtos/personne.dto';
import { PersonneService } from '../../services/personne.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-liste-personne',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './liste-personne.component.html',
  styleUrl: './liste-personne.component.scss'
})
export class ListePersonneComponent implements OnInit{

  showConfirm = false;
  personneAsupprimer: PersonneDto | null = null;

  selectedPersonneId: string | null = null;

  personnes: PersonneDto[] = [];
  @Output() personneSelected = new EventEmitter<string>();

  constructor(private personneService: PersonneService) {}

  ngOnInit(): void {
    this.listerPersonnes();
  }

  listerPersonnes() {
    this.personneService.listerPersonnes().subscribe({
      next: (data) => {
        this.personnes = data;
      },
      error: (err) => console.error('Erreur chargement personnes', err)
    });
  }

  selectedPersonne(id: string | undefined) {
    if(!id) return;
    this.personneSelected.emit(id);
  }

  demanderSuppression(personne: PersonneDto) {
    this.personneAsupprimer = personne;
    this.showConfirm = true;
  }

}
