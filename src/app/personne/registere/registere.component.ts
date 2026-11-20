import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { PersonneService } from '../../services/personne.service';
import { CreerPersonneDto } from '../../core/dtos/personne.dto';
import { Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-registere',
  standalone: true,
  imports: [ RouterLink, CommonModule, ReactiveFormsModule],
  templateUrl: './registere.component.html',
  styleUrls: ['./registere.component.scss']
})
export class RegistereComponent implements OnInit{

  registerForm!: FormGroup;
  error = '';

  constructor(private fb: FormBuilder, private authService: PersonneService, private router: Router) {}

  ngOnInit(): void{
    this.registerForm = this.fb.group({
      nom: ['', Validators.required],
      prenoms: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      telephone: [''],
      adresse: [''],
      motDePasse: ['', [
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{8,}$')
      ]]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const dto = this.registerForm.getRawValue() as CreerPersonneDto;
      this.authService.inscription(dto).subscribe({
        next: () => this.router.navigate(['/login']),
        error: () => this.error = 'Erreur lors de l\'inscription'
      });
    }
    else {
      this.registerForm.markAllAsTouched();
    }
  }
}