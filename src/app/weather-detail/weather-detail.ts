import { Component, computed, inject, input, OnDestroy, OnInit } from '@angular/core';
import { WeatherService } from '../services/weather';
import { Weather } from '../shared/models/weather';

@Component({
  imports: [],
  selector: 'app-weather-detail',
  styleUrl: './weather-detail.scss',
  templateUrl: './weather-detail.html',
})
export class WeatherDetail implements OnInit, OnDestroy {
  private openingTime = 0;
  private weatherName = 'unknown';

  /**
   * constructor() {
   *     console.log(this.id());
   *   }
   */

  ngOnInit(): void {
    const weatherId = Number(this.id());
    const weather = this.weatherService.getWeatherById(weatherId);
    this.weatherName = weather?.city ?? 'unknown';
    this.openingTime = Date.now();
    console.log(`[lifecycle] opened: ${this.openingTime} Name: ${this.weatherName}`);
  }
  ngOnDestroy(): void {
    const spentOnThePage = Math.round(Date.now() - this.openingTime) / 1000;
    console.log(`[lifecycle] closed: ${this.weatherName} after ${spentOnThePage} seconds`);
  }

  id = input.required<string>();

  protected weatherService = inject(WeatherService);

  protected selectedWeather = computed(() => this.weatherService.getWeatherById(Number(this.id())));
}
