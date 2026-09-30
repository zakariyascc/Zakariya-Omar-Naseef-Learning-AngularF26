import { Component, input, output } from '@angular/core';
import { Weather } from '../../shared/models/weather';

@Component({
  imports: [],
  selector: 'app-weather-list-item',
  styleUrl: './weather-list-item.scss',
  templateUrl: './weather-list-item.html',
})
export class WeatherListItem {
  weather = input.required<Weather>();

  expanded = false;

  opened = output<Weather>();

  toggle():void{
    this.expanded = !this.expanded;
    this.opened.emit(this.weather())
  }
}
