import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Theme {
  private readonly storageKey = 'app-theme'; // "light" ou "dark"

  constructor() {
    this.loadThemeOnStart();
  }

  private loadThemeOnStart() {
    const savedTheme: any = localStorage.getItem(this.storageKey) || 'light';
    this.applyTheme(savedTheme);
  }

  toggleTheme() {
    const current = localStorage.getItem(this.storageKey) || 'light';
    const next = current === 'light' ? 'dark' : 'light';
    this.applyTheme(next);
  }

  applyTheme(theme: 'light' | 'dark') {
    const body = document.body;

    if (theme === 'dark') {
      body.classList.add('dark-theme');
    } else {
      body.classList.remove('dark-theme');
    }

    localStorage.setItem(this.storageKey, theme);
  }

  getCurrentTheme() {
    return localStorage.getItem(this.storageKey) || 'light';
  }
}
