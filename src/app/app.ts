import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Theme } from './services/configurations/theme';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalManagerComponent } from './components/modal-manager-component/modal-manager-component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [CommonModule, RouterOutlet, RouterModule, MatDialogModule, ModalManagerComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('ng-sandbox');

  navLinks = [
    { link: '/', text: 'Home' },
    { link: '/test-page', text: 'Test Page' },
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
