import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Table } from './components/table/table';
import { StimulsoftReport } from './components/stimulsoft-report/stimulsoft-report';
import { StimulsoftDesigner } from './components/stimulsoft-designer/stimulsoft-designer';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'table', component: Table },
  { path: 'report', component: StimulsoftReport },
  { path: 'report-designer', component: StimulsoftDesigner },
];
