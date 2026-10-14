import { computed, effect, inject, Service, signal } from '@angular/core';
import {Weather} from '../shared/models/weather';
import { APP_CONFIG } from '../shared/config/app-config';
@Service()
export class WeatherService {
  private config = inject(APP_CONFIG);

  apiBaseUrl = this.config.apiBaseUrl;

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

  readonly weatherCount = computed( () => this.weathers().length);

  selectedCondition = signal(this.config.defaultCondition);


  readonly filterWeather = computed(() =>
    {
      const condition = this.selectedCondition();

      if (condition === 'Sunny') {
        return this.weatherList().filter((item) => item.condition === this.selectedCondition());
      }else if (condition === 'Rainy') {
        return this.weatherList().filter((item) => item.condition === this.selectedCondition());
      }else if (condition === 'Cloudy') {
        return this.weatherList().filter((item) => item.condition === this.selectedCondition());
      }
      return this.weatherList();
    });

  addWeather(newWeather: Weather) {
    this.weathers.update((list) => [...list, newWeather]);
  }

  constructor() {
    effect(() => {
      console.log('WeatherService constructor current item count ' + this.weatherCount);
    });
  }

  removeWeather(id: number) {
    this.weathers.update((list) => list.filter((item) => item.id !== id));
  }
}
