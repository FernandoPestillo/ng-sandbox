import { Component, OnInit } from '@angular/core';
import { Stimulsoft } from 'stimulsoft-reports-js/Scripts/stimulsoft.designer';

@Component({
  selector: 'app-stimulsoft-designer',
  imports: [],
  templateUrl: './stimulsoft-designer.html',
  styleUrl: './stimulsoft-designer.scss',
})
export class StimulsoftDesigner implements OnInit {
  viewer = new Stimulsoft.Designer.StiDesigner(undefined, 'StiDesigner', false);

  constructor() {}

  ngOnInit(): void {
    // var report = new Stimulsoft.Report.StiReport();
    // report.loadFile('reports/Invoice.mrt');

    // this.viewer.report = report;
    this.viewer.renderHtml('designer');
  }
}
