import { Routes } from '@angular/router';
import { WeatherList } from './weather-list/weather-list';
import { WeatherDetail } from './weather-detail/weather-detail';
import { WeatherForm } from './weather-form/weather-form';

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
  {
    path: 'add-weather',
    component: WeatherForm
  },
  {
    path: 'weather/update/:id',
    component: WeatherForm
  },
];
