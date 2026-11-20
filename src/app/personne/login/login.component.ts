import { Component } from '@angular/core';
import { PersonneService } from '../../services/personne.service';
import { AuthResponse, LoginRequest } from '../../core/dtos/personne.dto';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  loginRequest: LoginRequest = {email: '', motDePasse: ''};
  error = '';
  showPassword: boolean = false;

  constructor(private authService: PersonneService, private router: Router) {}

  togglePassword() {
    this.showPassword = !this.showPassword;
  }

  onLogin() {
    this.authService.connexion(this.loginRequest).subscribe({
      next: (res: AuthResponse) => {
        console.log('LOGIN RESPONSE', res);
        localStorage.setItem('token', res.token);

        console.log('APRES SETITEM =', localStorage.getItem('token'));
        console.log('TOUTES LES CLES =', Object.keys(localStorage));
        this.router.navigate(['/dashboard'])
      },
      error: () => this.error = 'Email ou mot de passe incorrecte'
    });
  }

}