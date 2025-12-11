import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Theme } from './services/configurations/theme';
import { MatDialogModule } from '@angular/material/dialog';
import { ModalManagerComponent } from './components/modal-manager-component/modal-manager-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, MatDialogModule, ModalManagerComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('ng-sandbox');

  constructor(private themeService: Theme) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  get currentTheme() {
    return this.themeService.getCurrentTheme();
  }
}
