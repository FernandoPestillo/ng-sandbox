import { Component } from '@angular/core';
import { Theme } from '../../services/configurations/theme';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  navLinks = [
    { link: '/', text: 'Home' },
    { link: '/test-page', text: 'Test Page' },
    { link: '/report-designer', text: 'Designer' },
  ];

  constructor(private themeService: Theme) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  get currentTheme() {
    return this.themeService.getCurrentTheme();
  }

  protected menuToggle() {
    const mobileMenu = document.getElementById('mobileMenu');

    if (mobileMenu) {
      mobileMenu.classList.toggle('hidden');
    }
  }
}
