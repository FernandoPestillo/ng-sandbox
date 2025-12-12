import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Table } from './components/table/table';
import { StimulsoftReport } from './components/stimulsoft-report/stimulsoft-report';
import { StimulsoftDesigner } from './components/stimulsoft-designer/stimulsoft-designer';
import { TestPage } from './pages/test-page/test-page';
import { Empresa } from './pages/modules/empresa/empresa';
import { Cliente } from './pages/modules/cliente/cliente';
import { Produto } from './pages/modules/produto/produto';
import { PageLayout } from './pages/page-layout/page-layout';

export const routes: Routes = [
  {
    path: '',
    component: PageLayout,
    children: [
      { path: '', component: Home },
      { path: 'test-page', component: TestPage },
    ],
  },
  { path: 'report', component: StimulsoftReport },
  { path: 'report-designer', component: StimulsoftDesigner },

  { path: 'empresa', component: Empresa },
  { path: 'cliente', component: Cliente },
  { path: 'produto', component: Produto },

  { path: 'table', component: Table },
];
