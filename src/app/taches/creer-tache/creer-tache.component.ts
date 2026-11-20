import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { TacheService } from '../../services/tache.service';
import { CreerTacheDto } from '../../core/dtos/tache.dto';
import { CategorieDto } from '../../core/dtos/categorie.dto';
import { Priorite } from '../../core/enums/priorite.enum';
import { TypeTache } from '../../core/enums/type-tache.enum';
import { CategorieService } from '../../services/categorie.service';
import { CommonModule } from '@angular/common';
import { Statut } from '../../core/enums/statut.enum';

@Component({
  selector: 'app-creer-tache',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './creer-tache.component.html',
  styleUrl: './creer-tache.component.scss'
})
export class CreerTacheComponent implements OnInit{

  form!:FormGroup;
  categories:CategorieDto [] = [];
  priorites = Object.values(Priorite);
  typeTaches = Object.values(TypeTache);
  statuts = Object.values(Statut);

  constructor(
    private fb: FormBuilder, 
    private tacheServie: TacheService,
    private categorieService: CategorieService
  ) {}
  
  ngOnInit(): void {
    this.form = this.fb.group({
      titre: ['', Validators.required],
      description: [''],
      dateDebut: ['', Validators.required],
      dateFin: [''],
      priorite: ['BASSE', Validators.required],
      statut: ['EN_ATTENTE', Validators.required],
      assignedId: [''],
      categorieId: ['', Validators.required],
      typeTache: ['ACTIVITE_DECLAREE', Validators.required],
    });

    this.categorieService.listerCategories().subscribe({
      next: (data) => this.categories = data,
      error: (err) => console.error('Erreur chargement catégories', err)
    });
  }
  
  onSubmit() {
    if (this.form.valid) {
      const nouvelleTache: CreerTacheDto = this.form.value;
      console.log('DTO ENVOYÉ =', nouvelleTache);

      this.tacheServie.creerTache(nouvelleTache).subscribe({
        next: (res) => {
          this.form.reset({ priorite: 'MOYENNE', typeTache: 'ACTIVITE_DECLAREE', statut: 'EN_ATTENTE' });
        },
        error: (err) => console.error('Erreur création', err)
      });
    } else {
      this.form.markAllAsTouched();
      console.log('Formulaire invalide');
    }
  }
}