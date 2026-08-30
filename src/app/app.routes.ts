import { Routes } from '@angular/router';
import { PAGES } from './data/site-content';
import { Splash } from './core/splash';
import { HomePage } from './pages/home';
import { ExperimentsPage } from './pages/experiments';
import { SwatchPageComponent } from './pages/swatch-page';

export const routes: Routes = [
  { path: '', component: Splash },           // logo draw → auto-routes to /home
  { path: 'home', component: HomePage },
  { path: 'experiments', component: ExperimentsPage },
  ...PAGES.map((p) => ({
    path: p.slug,
    component: SwatchPageComponent,
    data: { page: p },
  })),
  { path: '**', redirectTo: 'home' },        // real 404 → home (kept simple)
];

