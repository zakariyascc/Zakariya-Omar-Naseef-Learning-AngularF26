import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { WeatherList } from './contentList/weather-list/weather-list';

@Component({
  imports: [RouterOutlet, WeatherList],
  selector: 'app-root',
  styleUrl: './app.scss',
  templateUrl: './app.html',
})
export class App {
  protected title: string = 'Weather App';
}
