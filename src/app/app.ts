import { Component } from '@angular/core';
import { WeatherList } from './contentList/weather-list/weather-list';

@Component({
  imports: [WeatherList],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected title: string = 'Weather App';
}
