import { Component, input, output } from '@angular/core';
import { Weather } from '../shared/models/weather';
import { DecimalPipe, NgOptimizedImage, SlicePipe, TitleCasePipe } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  imports: [NgOptimizedImage, RouterLink, TitleCasePipe, DecimalPipe, SlicePipe],
  selector: 'app-weather-list-item',
  styleUrl: './weather-list-item.scss',
  templateUrl: './weather-list-item.html',
})
export class WeatherListItem {
  weatherList = input.required<Weather>();

  expanded = false;

  opened = output<Weather>();

  toggle(): void {
    this.expanded = !this.expanded;
    this.opened.emit(this.weatherList());
  }
  protected readonly Math = Math;

  sunnyDayImage = 'images/sun.png';
  cloudyDayImage = 'images/cloudy.png';
  rainyDayImage = 'images/rainy-day.png';

  removeWeather = output<number>();

  remove(): void {
    this.removeWeather.emit(this.weatherList().id);
  }
}
