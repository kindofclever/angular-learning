import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home').then(m => m.Home)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about').then(m => m.About)
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services/services').then(m => m.Services)
  },
  {
    path: 'pricing',
    loadComponent: () => import('./pages/pricing/pricing').then(m => m.Pricing)
  },
  {
    path: 'procedure',
    loadComponent: () => import('./pages/procedure/procedure').then(m => m.Procedure)
  },
  {
    path: 'impressions',
    loadComponent: () => import('./pages/impressions/impressions').then(m => m.Impressions)
  },
  {
    path: 'reviews',
    loadComponent: () => import('./pages/reviews/reviews').then(m => m.Reviews)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact').then(m => m.Contact)
  },
  {
    path: 'booking',
    loadComponent: () => import('./pages/booking/booking').then(m => m.Booking)
  },
  {
    path: 'admin',
    loadComponent: () => import('./pages/admin/admin').then(m => m.Admin)
  }
];
