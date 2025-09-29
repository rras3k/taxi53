import { Routes } from '@angular/router';
import { HomePage } from './home-page/home-page.component';
import { AdminPage } from './about-page/admin-page.component';

// export const routes: Routes = [];


export const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'admin',
    component: AdminPage,
  },
];
