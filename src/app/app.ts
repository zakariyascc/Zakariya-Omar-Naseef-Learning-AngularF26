import { Component } from '@angular/core';
import { WeatherList } from './weather-list/weather-list';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [WeatherList, RouterOutlet],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected title: string = 'Weather App';
}
