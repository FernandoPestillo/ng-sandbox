import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Table } from './components/table/table';
import { StimulsoftReport } from './components/stimulsoft-report/stimulsoft-report';
import { StimulsoftDesigner } from './components/stimulsoft-designer/stimulsoft-designer';
import { TestPage } from './pages/test-page/test-page';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'test-page', component: TestPage },
  { path: 'report', component: StimulsoftReport },
  { path: 'report-designer', component: StimulsoftDesigner },

  { path: 'table', component: Table },
];
