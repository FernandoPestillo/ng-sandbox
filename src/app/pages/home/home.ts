import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  items: number[] = [];
  counter = 0;

  constructor(private toastr: ToastrService) {}

  ngOnInit(): void {
    while (this.counter < 999) {
      this.items.push(this.counter++);
    }
  }

  exibirAlerta() {
    console.log('TOASTR');
    this.toastr.warning('TOASTR');
  }
}
