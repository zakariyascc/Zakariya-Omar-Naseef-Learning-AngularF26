import { Routes } from '@angular/router';
import { WeatherList } from './weather-list/weather-list';
import { WeatherDetail } from './weather-detail/weather-detail';
import { WeatherForm } from './weather-form/weather-form';
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
    component: WeatherForm,
    canActivate: [editGuard]
  },
  {
    path: 'weather/:id',
    component: WeatherDetail
  },
  {
    path: 'add-weather',
    component: WeatherForm
  },

];
