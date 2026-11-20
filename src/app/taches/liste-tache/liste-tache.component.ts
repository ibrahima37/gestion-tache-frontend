import { Component, Input, OnInit, Output, EventEmitter, SimpleChanges } from '@angular/core';
import { TacheDto } from '../../core/dtos/tache.dto';
import { TacheService } from '../../services/tache.service';
import { Statut } from '../../core/enums/statut.enum';
import { CommonModule } from '@angular/common';
import { PersonneDto } from '../../core/dtos/personne.dto';
import { TypeTache } from '../../core/enums/type-tache.enum';
import { Priorite } from '../../core/enums/priorite.enum';
import { PersonneService } from '../../services/personne.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-liste-tache',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './liste-tache.component.html',
  styleUrls: ['./liste-tache.component.scss']
})
export class ListeTacheComponent implements OnInit{

  @Input() personneId: string | null = null;

  showConfirm = false;
  tacheASupprimer: TacheDto | null = null;
  
  @Output() tacheSelected = new EventEmitter<string>();

  tache: TacheDto[] = [];
  personne: PersonneDto[] = [];

  statutSelectionne: Statut | null = null;
  statut = Statut;
  statuts: Statut[] = Object.values(this.statut) as Statut[];

  // Pour les selects
  typeTaches = Object.values(TypeTache) as TypeTache[];
  priorites = Object.values(Priorite) as Priorite[];

  tacheAAttribuer: TacheDto | null = null;
  personneSelectionnee: string = '';

  // FILTRES
  filtreUtilisateur: string = ''; // '' = Tous
  filtreStatut: string = '';
  filtreType: string = '';
  filtrePriorite: string = '';
  recherche: string = '';

  constructor(
    private tacheService: TacheService,
    private personneService: PersonneService
  ){}

  ngOnInit(): void {
    this.listerTaches();
    this.chargerUtilisateurs();
  }

  selectTache(id: string | undefined) {
    if(!id) return;
    this.tacheSelected.emit(id);
  }
  
  demanderSuppression(tache: TacheDto) {
    this.tacheASupprimer = tache;
    this.showConfirm = true;
  }

  annulerSuppression() {
    this.showConfirm = false;
    this.tacheASupprimer = null;
  }

  confirmerSuppression() {
    if (!this.tacheASupprimer?.id) return;

    const idASupprimer = this.tacheASupprimer.id;

    this.tacheService.supprimerTache(idASupprimer).subscribe({
      next: () => {
        this.tache = this.tache.filter(t => t.id !== this.tacheASupprimer!.id);
        this.annulerSuppression();
      },
      error: (err) => console.error('Erreur suppression', err)
    });
  }

  chargerUtilisateurs() {
    this.personneService.listerPersonnes().subscribe({
      next: (data) => this.personne = data,
      error: (err) => console.error('Erreur utilisateurs', err)
    });
  }

  listerTaches(): void{
    this.tacheService.listerTaches().subscribe({
      next: (data) => {
        this.tache = data;
      },
      error: (err) => console.error('Erreur lors de la recuperation des taches', err)
    });
  }

  listerTacheParPersonne(): void {
    if (!this.personneId) return;
    this.tacheService.listerTachesParPersonne(this.personneId).subscribe({
      next: (data) => this.tache = data,
      error: (err) => console.error('Erreur récupération des tâches', err)
    });
  }

  compter(statut: Statut): number{
    return this.tache.filter(t => t.statut === statut).length;
  }

  choisirStatut(statut: Statut) {
    this.statutSelectionne = this.statutSelectionne === statut ? null : statut;
    this.filtreStatut = this.statutSelectionne ?? '';
  }

  resetFiltres() {
    this.filtreUtilisateur = '';
    this.filtreStatut = '';
    this.filtreType = '';
    this.filtrePriorite = '';
    this.recherche = '';
    this.statutSelectionne = null;
  }

  get tachesFiltrees(): TacheDto[] {
    return this.tache.filter(t => {
      // 1. Carte statut cliquée
      if (this.statutSelectionne && t.statut !== this.statutSelectionne) return false;
      // 2. Filtre utilisateur
      if (this.filtreUtilisateur && t.assignedId !== this.filtreUtilisateur && (t as any).personneId !== this.filtreUtilisateur) return false;
      // 3. Filtre statut (select)
      if (this.filtreStatut && t.statut !== this.filtreStatut) return false;
      // 4. Filtre type
      if (this.filtreType && t.typeTache !== this.filtreType) return false;
      // 5. Filtre priorité = ton "Etat" ?
      if (this.filtrePriorite && t.priorite !== this.filtrePriorite) return false;
      // 6. Recherche texte
      if (this.recherche && !t.titre.toLowerCase().includes(this.recherche.toLowerCase())) return false;
      return true;
    });
  }

  // Pour afficher le nom de l'utilisateur dans le tableau
  getNomUtilisateur(t: TacheDto): string {
    if (!t.assignedId) return '-';
    const p = this.personne.find(x => x.id === t.assignedId);
    return p ? `${p.prenoms} ${p.nom}` : t.assignedId;
  }

  ouvrirModalAttribution(tache: TacheDto) {
    this.tacheAAttribuer = tache;
    this.personneSelectionnee = tache.assignedId ?? ''; // pré-remplit si déjà attribuée
  }

  fermerModalAttribution() {
    this.tacheAAttribuer = null;
    this.personneSelectionnee = '';
  }

  confirmerAttribution() {
    if (!this.tacheAAttribuer?.id || !this.personneSelectionnee){
      alert('Veuillez choisir une personne');
      return;
    } 
    const tacheId = this.tacheAAttribuer.id;

    this.tacheService.attribuerTache(tacheId, this.personneSelectionnee)
      .subscribe({
        next: (tacheMiseAJour) => {
          const index = this.tache.findIndex(t => t.id === tacheMiseAJour.id);
          if (index !== -1) {
            this.tache[index] = tacheMiseAJour;
          }
          this.fermerModalAttribution();
          alert('Tâche attribuée avec succès ✅');
        },
        error: (err) => {
          console.error('Erreur attribution', err);
          alert('Erreur lors de l\'attribution');
        }
    });
  }

}