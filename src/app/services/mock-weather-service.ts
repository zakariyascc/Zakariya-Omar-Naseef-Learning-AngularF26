import { computed, effect, inject, Injectable, Service, signal } from '@angular/core';
import { Weather } from '../shared/models/weather';
import { APP_CONFIG } from '../shared/config/app-config';

@Injectable({
  providedIn: 'root'
})
export class MockWeatherService {

  config = inject(APP_CONFIG);

  private weathers =  signal<Weather[]>([
    {
      id: 1,
      city: 'Windsor (TEST DATA)',
      temperature: 22,
      condition: 'Sunny',
      humidity: 45,
      windSpeed: 12,
      hasDescription: true,
      description: 'Clear and sunny weather.',
    },
    {
      id: 2,
      city: 'Toronto (TEST DATA)',
      temperature: 18,
      condition: 'Cloudy',
      humidity: 60,
      windSpeed: 15,
      hasDescription: true,
      description: 'Mostly cloudy throughout the day.',
    },
  ]);

  readonly weatherList = this.weathers;

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
