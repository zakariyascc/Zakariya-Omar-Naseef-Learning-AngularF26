export interface Weather {
  id: number;
  city: string;
  temperature: number;
  condition: string;
  humidity: number;
  windSpeed: number;
  hasDescription?: boolean | null;
  description?: string | null;
}
