import { Component, input } from '@angular/core';
import { Weather } from '../../shared/models/weather';

@Component({
  imports: [],
  selector: 'app-weather-list-item',
  styleUrl: './weather-list-item.scss',
  templateUrl: './weather-list-item.html',
})
export class WeatherListItem {
  weather = input.required<Weather>();
}
