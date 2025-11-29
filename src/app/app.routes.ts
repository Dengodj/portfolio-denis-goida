import { Routes } from '@angular/router';

import { About } from './pages/about/about';
import { Contact } from './pages/contact/contact';
import { Home } from './pages/home/home';
import { Portfolio } from './pages/portfolio/portfolio';
import { Services } from './pages/services/services';

export const routes: Routes = [
  { path: '', component: Home },
  { path: 'about', component: About },
  { path: 'contact', component: Contact },
  { path: 'portfolio', component: Portfolio },
  { path: 'services', component: Services },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
