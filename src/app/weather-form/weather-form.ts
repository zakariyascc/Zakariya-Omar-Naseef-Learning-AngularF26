import { Component, computed, effect, inject, input } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  ValidatorFn,
  ReactiveFormsModule, ValidationErrors,
  Validators,
} from '@angular/forms';
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

  id = input<string>();

  protected isEditMode = computed(() => this.id() !== undefined);

  protected weatherForm = this.formBuilder.nonNullable.group({
    id: this.weatherService.weatherList().length + 1,
    city: ['', [Validators.required, Validators.minLength(2), noWhitespaceValidator()]],
    temperature: [20, Validators.required],
    condition: ['', Validators.required],
    humidity: [50, Validators.required],
    windSpeed: [10, Validators.required],
    hasDescription: [false],
    description: [''],
  },
    {
      validators: [CompareTempAndHum()]
    });

  constructor() {
    effect(() => {
      const weatherId = this.id();
      if (weatherId) {
        const weather = this.weatherService.getWeatherById(Number(weatherId));
        if (weather) {
          this.weatherForm.patchValue({
            ...weather,
            hasDescription: weather.hasDescription ?? false,
            description: weather.description ?? ''
          });
        }
      }
    });
  }

  protected onSubmit(): void {
    if (this.weatherForm.invalid) {
      return;
    }
    const newWeather = this.weatherForm.getRawValue();
    if (this.isEditMode()) {
      this.weatherService.updateWeather(newWeather);
    }else {
      this.weatherService.addWeather(newWeather);
    }

    this.weatherForm.reset();
    this.router.navigate(['/weather', newWeather.id])
  }

  protected readonly noWhitespaceValidator = noWhitespaceValidator;
}

function noWhitespaceValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const value = control.value;
    if (!value) {
      return null;
    }
    const isWhitespace = value.trim().length === 0;
    return isWhitespace ? { whitespace: true } : null;
  };
}

function CompareTempAndHum(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const temperature: number = control.get('temperature')?.value;
    const humidity: number = control.get('humidity')?.value;
    if(!temperature || isNaN(temperature) && !humidity || isNaN(humidity)) {
      return null;
    }
    const isTempRangeInvalid = temperature > humidity;
    return isTempRangeInvalid ? { tempRangeInvalid : true } : null;

  }
}
