import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CategorieDto } from '../../core/dtos/categorie.dto';
import { CategorieService } from '../../services/categorie.service';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-liste-categorie',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './liste-categorie.component.html',
  styleUrls: ['./liste-categorie.component.scss']
})
export class ListeCategorieComponent implements OnInit{

  showConfirm = false;
  categorieAsupprimer: CategorieDto | null = null;

  categories: CategorieDto[] = [];
  @Output() categorieSelected = new EventEmitter<string>();

  constructor(private categorieService: CategorieService) {}

  ngOnInit(): void {
     console.log('TOKEN AVANT APPEL =', localStorage.getItem('token'));
    this.listerCategories();
  }

  listerCategories() {
    this.categorieService.listerCategories().subscribe({
      next: (data) => {
        this.categories = data;
      },
      error: (err) => console.error('Erreur chargement catégories', err)
    });
  }

  selectCategorie(id: string | undefined) {
    if(!id) return;
    this.categorieSelected.emit(id);
  }

  demanderSuppression(cat: CategorieDto) {
    this.categorieAsupprimer = cat;
    this.showConfirm = true;
  }

  annulerSuppression() {
    this.showConfirm = false;
    this.categorieAsupprimer = null;
  }

  confirmerSuppression() {
    if (!this.categorieAsupprimer?.id) return;

    const idASupprimer = this.categorieAsupprimer.id;

    this.categorieService.supprimerCategorie(idASupprimer).subscribe({
      next: () => {
        this.categories = this.categories.filter(c => c.id !== this.categorieAsupprimer!.id);
        this.annulerSuppression();
      },
      error: (err) => console.error('Erreur suppression', err)
    });
  }

  supprimer(id: string | undefined) {
    if(!id) return;
    this.categorieService.supprimerCategorie(id).subscribe({
      next: () => {
        this.categories = this.categories.filter(c => c.id !== id);
      },
      error: (err) => console.error('Erreur suppression', err)
    });
  }
}