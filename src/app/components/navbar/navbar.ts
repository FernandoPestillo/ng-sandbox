import { Component } from '@angular/core';
import { Theme } from '../../services/configurations/theme';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.scss',
})
export class Navbar {
  navRoutes: any[] = [];

  constructor(private router: Router, private themeService: Theme) {
    this.navRoutes = this.getNavbarRoutes(router.config);
  }

  private getNavbarRoutes(routes: any[], parentPath = ''): any[] {
    let output: any[] = [];

    for (const r of routes) {
      const fullPath = parentPath + (r.path ? '/' + r.path : '');

      if (r.data?.showInNavbar) {
        output.push({
          path: fullPath,
          title: r.data.title,
        });
      }

      if (r.children) {
        output = output.concat(this.getNavbarRoutes(r.children, fullPath));
      }
    }

    return output;
  }

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
