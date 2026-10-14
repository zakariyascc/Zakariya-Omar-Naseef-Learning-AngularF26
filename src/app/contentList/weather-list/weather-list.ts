import { Component, output } from '@angular/core';
import { Weather } from '../../shared/models/weather';
import { WeatherListItem } from '../../contentListItem/weather-list-item/weather-list-item';
import { inject } from '@angular/core';
import { WeatherService } from '../../services/weather';
import { APP_CONFIG } from '../../shared/config/app-config';

@Component({
  imports: [WeatherListItem],
  selector: 'app-weather-list',
  styleUrl: './weather-list.scss',
  templateUrl: './weather-list.html',
})
export class WeatherList {

  private weatherService = inject(WeatherService);

  config = inject(APP_CONFIG);

  protected weatherList = this.weatherService.weatherList;

  protected filteredWeathers = this.weatherService.filterWeather ;

  onWeatherOpened(weather: Weather): void {
    console.warn('Opened: ', weather.description);
  }
  removeWeather(id: number): void {
    this.weatherService.removeWeather(id);
  }

  addWeather() {
    this.weatherService.addWeather({
      id: this.weatherList.length + 1,
      city: 'Calgary',
      temperature: 19,
      condition: 'Sunny',
      humidity: 40,
      windSpeed: 14,
      hasDescription: true,
      description: 'Brisk wind with plenty of sunshine.',
    });
  }
}
