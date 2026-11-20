import { Component, OnInit } from '@angular/core';
import { PersonneService } from '../../services/personne.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { DrawerComponent } from '../drawer/drawer.component';

@Component({
  selector: 'app-appbar',
  standalone: true,
  imports: [CommonModule, DrawerComponent],
  templateUrl: './appbar.component.html',
  styleUrls: ['./appbar.component.scss']
})
export class AppbarComponent implements OnInit{

  isDrawerOpen = false;
  username: string = '';

  constructor(private personneService: PersonneService, private router: Router){
    // Récupère le nom depuis le token JWT
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split('.')[1]));
        this.username = payload.sub || payload.username || payload.email || '';
      } catch {}
    }
  }

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  closeDrawer() {
    this.isDrawerOpen = false;
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  ngOnInit(): void {
    
  }
}