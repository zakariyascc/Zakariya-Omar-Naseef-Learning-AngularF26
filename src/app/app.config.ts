import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { APP_CONFIG } from './shared/config/app-config';
import { WeatherService } from './services/weather';
import { MockWeatherService } from './services/mock-weather-service';
import { APP_KEY } from './shared/config/app-key';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes, withComponentInputBinding()),
    {
      provide: WeatherService,
      useClass: WeatherService,
    },
    {
      provide: APP_CONFIG,
      useValue: {
        apiBaseUrl: "https://api.openweathermap.org/data/2.5",
        defaultCondition: 'Cloudy',
        apiKey: APP_KEY,
      }
    }
  ]
};
