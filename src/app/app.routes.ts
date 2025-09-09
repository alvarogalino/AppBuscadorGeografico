import { AboutPagesComponent } from './shared/pages/about-pages/about-pages.component';
import { ContactPagesComponent } from './shared/pages/contact-pages/contact-pages.component';
import { HomePagesComponent } from './shared/pages/home-pages/home-pages.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  //{
  //  path: 'home',
  //  component: HomePagesComponent
  //},

  {
    path: 'about',
    component: AboutPagesComponent
  },

  {
    path: 'contact',
    component: ContactPagesComponent
  },

  {
    path: 'countries',
    loadChildren:() => import('./countries/countries.module').then(m=>m.CountriesModule)
  },

  {
    path: '**',
    redirectTo: 'countries'
  },





];


