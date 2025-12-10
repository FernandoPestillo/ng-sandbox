import { Component, OnInit } from '@angular/core';
import { Stimulsoft } from 'stimulsoft-reports-js/Scripts/stimulsoft.viewer';

@Component({
  selector: 'app-stimulsoft-report',
  imports: [],
  templateUrl: './stimulsoft-report.html',
  styleUrl: './stimulsoft-report.scss',
})
export class StimulsoftReport implements OnInit {
  viewer = new Stimulsoft.Viewer.StiViewer(undefined, 'StiViewer', false);

  constructor() {}

  ngOnInit(): void {
    // var report = new Stimulsoft.Report.StiReport();
    // report.loadFile('reports/Invoice.mrt');

    // this.viewer.report = report;
    this.viewer.renderHtml('viewer');
  }
}
