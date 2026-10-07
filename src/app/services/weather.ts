import { computed, Service, signal } from '@angular/core';
import {Weather} from '../shared/models/weather';

@Service()
export class WeatherService {

  private weathers =  signal<Weather[]>([
    {
      id: 1,
      city: 'Windsor',
      temperature: 22,
      condition: 'Sunny',
      humidity: 45,
      windSpeed: 12,
      hasDescription: true,
      description: 'Clear and sunny weather.',
    },
    {
      id: 2,
      city: 'Toronto',
      temperature: 18,
      condition: 'Cloudy',
      humidity: 60,
      windSpeed: 15,
      hasDescription: true,
      description: 'Mostly cloudy throughout the day.',
    },
    {
      id: 3,
      city: 'London',
      temperature: 16,
      condition: 'Rainy',
      humidity: 75,
      windSpeed: 20,
      hasDescription: false,
    },
    {
      id: 4,
      city: 'Ottawa',
      temperature: 20,
      condition: 'Sunny',
      humidity: 50,
      windSpeed: 10,
      hasDescription: true,
      description: 'Warm with clear skies.',
    },
    {
      id: 5,
      city: 'Montreal',
      temperature: 14,
      condition: 'Rainy',
      humidity: 80,
      windSpeed: 18,
      hasDescription: true,
      description: 'Light rain is expected.',
    },
    {
      id: 6,
      city: 'Vancouver',
      temperature: 17,
      condition: 'Cloudy',
      humidity: 70,
      windSpeed: 9,
      hasDescription: false,
    },
  ]);

  weatherList = this.weathers.asReadonly();
  weatherCount = computed( () => this.weathers().length);

}
