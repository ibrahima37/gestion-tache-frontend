import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-drawer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './drawer.component.html',
  styleUrls: ['./drawer.component.scss']
})
export class DrawerComponent {

  @Output() close = new EventEmitter<void>();

  isDropdownOpen: { [key: string]: boolean } = {
    categories: false,
    taches: false,
    personnes: false,
    profiles: false
  };

  constructor(private router: Router) {} 

  toggleDropdown(menu: string) {
    this.isDropdownOpen[menu] = !this.isDropdownOpen[menu];
  }

  navigateTo(route: string) {
    this.router.navigate([route]); 
    this.close.emit();
  }

}