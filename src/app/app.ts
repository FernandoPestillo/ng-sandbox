import { Component, signal } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { Theme } from './services/configurations/theme';
import { FormRegistryService } from './services/configurations/dialogs/form-registry-service';
import { Empresa } from './pages/modules/empresa/empresa';
import { Cliente } from './pages/modules/cliente/cliente';
import { Produto } from './pages/modules/produto/produto';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('ng-sandbox');

  protected themeIcon = '☀️';

  constructor(private themeService: Theme, private registry: FormRegistryService) {
    registry.register('empresa', Empresa);
    registry.register('cliente', Cliente);
    registry.register('produto', Produto);
  }

  toggleTheme() {
    this.themeService.toggleTheme();
    if (this.currentTheme === 'light') {
      this.themeIcon = '☀️';
    }
  }

  get currentTheme() {
    return this.themeService.getCurrentTheme();
  }
}
