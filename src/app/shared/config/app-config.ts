import { InjectionToken } from '@angular/core';

export interface AppConfig {
  apiBaseUrl: string;
  defaultCondition: string;
}

export const APP_CONFIG = new InjectionToken<AppConfig>('app.config');
