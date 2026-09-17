export interface Weather {
  id: number;
  city: string;
  temperature: number;
  humidity: number;
  windSpeed: number;
  description?: string;
}
