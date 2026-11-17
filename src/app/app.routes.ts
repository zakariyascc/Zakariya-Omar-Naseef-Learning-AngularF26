import { Routes } from '@angular/router';
import { WeatherList } from './weather-list/weather-list';
import { editGuard } from './edit-guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/weather',
    pathMatch: 'full',
  },
  {
    path: 'weather',
    component: WeatherList
  },
  {
    path: 'weather/update/:id',
    loadComponent: () => import('./weather-form/weather-form').then(m => m.WeatherForm),
    canActivate: [editGuard]
  },
  {
    path: 'weather/:id',
    loadComponent: () => import('./weather-detail/weather-detail').then(m => m.WeatherDetail),
  },
  {
    path: 'add-weather',
    loadComponent: () => import('./weather-form/weather-form').then(m => m.WeatherForm),
  },
  {
    path: '**',
    loadComponent: () => import('./page-not-found/page-not-found').then(m => m.PageNotFound),
  },
];
