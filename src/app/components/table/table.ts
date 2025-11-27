import { Component, OnInit } from '@angular/core';
import { FilterService, GridModule, PageService, SortService } from '@syncfusion/ej2-angular-grids';
import { data } from '../../data/datasource';

@Component({
  selector: 'app-table',
  imports: [GridModule],
  templateUrl: './table.html',
  styleUrl: './table.scss',
  providers: [PageService, SortService, FilterService],
})
export class Table implements OnInit {
  public data?: object[];

  ngOnInit(): void {
    this.data = data;
  }
}
