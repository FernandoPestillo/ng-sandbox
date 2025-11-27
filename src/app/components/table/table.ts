import { Component, OnInit } from '@angular/core';
import { GridModule } from '@syncfusion/ej2-angular-grids';
import { data } from '../../data/datasource';

@Component({
  selector: 'app-table',
  imports: [GridModule],
  templateUrl: './table.html',
  styleUrl: './table.scss',
})
export class Table implements OnInit {
  public data?: object[];

  ngOnInit(): void {
    this.data = data;
  }
}
