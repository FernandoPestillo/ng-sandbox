import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Table } from './components/table/table';
import { StimulsoftReport } from './components/stimulsoft-report/stimulsoft-report';
import { StimulsoftDesigner } from './components/stimulsoft-designer/stimulsoft-designer';
import { Dialog } from './components/dialog/dialog';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'dialog', component: Dialog },
  { path: 'table', component: Table },
  { path: 'report', component: StimulsoftReport },
  { path: 'report-designer', component: StimulsoftDesigner },
];
