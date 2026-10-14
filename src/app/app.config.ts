import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { APP_CONFIG } from './shared/config/app-config';
import { WeatherService } from './services/weather';
import { MockWeatherService } from './services/mock-weather-service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideRouter(routes),
    {
      provide: WeatherService,
      useClass: MockWeatherService
    },
    {
      provide: APP_CONFIG,
      useValue: {
        apiBaseUrl: "https://api.example.com",
        defaultCondition: 'Cloudy'
      }
    }
  ]
};
