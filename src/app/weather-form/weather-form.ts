import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { WeatherService } from '../services/weather';
import { Router } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-weather-form',
  styleUrl: './weather-form.scss',
  templateUrl: './weather-form.html',
})
export class WeatherForm {
  private formBuilder = inject(FormBuilder);
  private weatherService = inject(WeatherService);
  private router = inject(Router);

  protected weatherForm = this.formBuilder.nonNullable.group({
    id: this.weatherService.weatherList().length + 1,
    city: ['', Validators.required, Validators.minLength(2)],
    temperature: [20, Validators.required],
    condition: ['', Validators.required],
    humidity: [50, Validators.required],
    windSpeed: [10, Validators.required],
    hasDescription: [false],
    description: [''],
  });

  protected onSubmit(): void {
    if (this.weatherForm.invalid) {
      return;
    }
    const newWeather = this.weatherForm.getRawValue();
    this.weatherService.addWeather(newWeather);
    this.weatherForm.reset();
  }
}
