import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  isMenuOpen: boolean = false;

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}
