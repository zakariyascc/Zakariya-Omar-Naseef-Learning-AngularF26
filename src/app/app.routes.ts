import { Routes } from '@angular/router';
import { WeatherList } from './weather-list/weather-list';
import { WeatherDetail } from './weather-detail/weather-detail';

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
    path: 'weather/:id',
    component: WeatherDetail
  },

];
