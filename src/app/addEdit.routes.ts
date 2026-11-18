import { Routes } from '@angular/router';
import { editGuard } from './edit-guard';
import { WeatherForm } from './weather-form/weather-form';

const addEditRoutes: Routes = [
  {
    path: 'weather/update/:id',
    //loadComponent: () => import('./weather-form/weather-form').then(m => m.WeatherForm),
    component: WeatherForm,
    canActivate: [editGuard]
  },
  {
    path: 'add-weather',
    //loadComponent: () => import('./weather-form/weather-form').then(m => m.WeatherForm),
    component: WeatherForm
  },
];

export default addEditRoutes;
