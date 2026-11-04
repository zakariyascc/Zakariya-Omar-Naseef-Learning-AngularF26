import { Component, computed, inject, input } from '@angular/core';
import { WeatherService } from '../services/weather';

@Component({
  imports: [],
  selector: 'app-weather-detail',
  styleUrl: './weather-detail.scss',
  templateUrl: './weather-detail.html',
})
export class WeatherDetail {
  id = input.required<string>();

  protected weatherService = inject(WeatherService);

  protected selectedWeather =
    computed(()=> this.weatherService.getWeatherById(Number(this.id())));

}
