import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CategorieService } from '../../services/categorie.service';
import { CategorieDto } from '../../core/dtos/categorie.dto';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-creer-categorie',
  standalone: true,
  imports: [ CommonModule, ReactiveFormsModule],
  templateUrl: './creer-categorie.component.html',
  styleUrl: './creer-categorie.component.scss'
})
export class CreerCategorieComponent implements OnInit{

  form!:FormGroup;

  constructor(private fb: FormBuilder, private categorieService: CategorieService) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nomCategorie: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      const nouvelleCategorie: CategorieDto = { nomCategorie: this.form.value.nomCategorie };

      this.categorieService.creerCategorie(nouvelleCategorie).subscribe({
        next: (res) => {
          console.log('Catégorie créée', res);
          this.form.reset(); // Réinitialiser le formulaire après la création
        },
        error: (err) => console.error('Erreur création', err)
      });
    } else {
      console.log('Formulaire invalide');
    }
  }

}
