import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Theme } from '../../services/theme';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  items: number[] = [];
  counter = 0;

  constructor(private toastr: ToastrService, private themeService: Theme) {}

  ngOnInit(): void {
    while (this.counter < 999) {
      this.items.push(this.counter++);
    }
  }

  exibirAlerta() {
    console.log('TOASTR');
    this.toastr.warning('TOASTR');

    this.toggleTheme();
  }

  toggleTheme() {
    this.themeService.toggleTheme();
  }

  get currentTheme() {
    return this.themeService.getCurrentTheme();
  }
}
