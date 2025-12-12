import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { StimulsoftReport } from './components/stimulsoft-report/stimulsoft-report';
import { StimulsoftDesigner } from './components/stimulsoft-designer/stimulsoft-designer';
import { ToastrModal } from './pages/toastr-modal/toastr-modal';
import { PageLayout } from './components/page-layout/page-layout';

export const routes: Routes = [
  {
    path: '',
    component: PageLayout,
    children: [
      { path: '', component: Home, data: { title: 'Home', showInNavbar: true } },
      {
        path: 'toastr-modal',
        component: ToastrModal,
        data: { title: 'Toastr Modal', showInNavbar: true },
      },
    ],
  },

  {
    path: 'report',
    component: StimulsoftReport,
    // data: { title: 'Report', showInNavbar: true }
  },
  {
    path: 'report-designer',
    component: StimulsoftDesigner,
    data: { title: 'Designer', showInNavbar: true },
  },
];
