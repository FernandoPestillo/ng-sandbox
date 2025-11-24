import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  items: number[] = [];
  counter = 0;

  ngOnInit(): void {
    while (this.counter < 999) {
      this.items.push(this.counter++);
    }
  }
}
