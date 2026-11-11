import { computed, effect, inject, Injectable, signal } from '@angular/core';
import {Weather} from '../shared/models/weather';
import { APP_CONFIG } from '../shared/config/app-config';
import { APP_KEY} from '../shared/config/app-key';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  /**
   * Inject Application configuration token.
   * @private config
   */
  private config = inject(APP_CONFIG);

  /**
   *
   * @private http
   */
  private http = inject(HttpClient);

  /**
   * Base URL for API requests retrieved from the application configuration.
   * @param apiBaseUrl
   */
  readonly apiBaseUrl = this.config.apiBaseUrl;

  /**
   * Private signal containing list of weather data.
   * @private weathers
   */
  private weathersFromApi = signal<Weather[]>([]);

  /**
   * Public readonly weathers signal for external components.
   * @param readonly weatherList
   */
  readonly weatherList = this.weathersFromApi;

  /**
   * Computed signal that returns the total count of weather items in the list.
   * @param readonly weatherCount
   */
  readonly weatherCount = computed( () => this.weathersFromApi().length);

  /**
   * Signal tracking the currently active weather condition filter
   * @param readonly selectedCondition
   */
  readonly selectedCondition = signal(this.config.defaultCondition);

  /**
   * Holds the loading state value
   * @param readonly isLoading boolean false
   */
  readonly isLoading = signal<boolean>(false);

  /**
   * Holds the error messages
   * @param readonly errorMessage string | null null
   */
  readonly errorMessage = signal<string | null>(null);

  /**
   * Service constructor that initializes an effect to log weather count changes
   */
  constructor() {
    effect(() => {
      console.log('WeatherService constructor current item count ' + this.weatherCount);
    });
    this.getWeather();
  }

  getWeather(){
    this.isLoading.set(true);
    this.errorMessage.set(null);
    /**
     * Test Data
     * const testDataUrl = `${this.config.apiBaseUrl}/weather?q=Windsor,ON,CA&appid=${APP_KEY}&units=metric`;
     *     const testData = this.http.get(testDataUrl).subscribe({
     *       next: data => {
     *         console.log('The Data:', data);
     *       },
     *       error: err => {
     *         console.log('The Error :', err);
     *       }
     *     });
     */

    /**
     * City name to show live data from api
     * @param const city array
     */
    const city = [
      'Windsor,ON,CA',
      'Toronto,ON,CA',
      'London,ON,CA',
      'Ottawa,ON,CA',
      'Montreal,ON,CA',
      'Vancouver,ON,CA'
    ];
    city.forEach((city, index) => {

      /**
       * params object to send query parameters
       * @param const params Object
       */
      const params = {
        params: {
          q: city,
          appid: APP_KEY,
          units: 'metric'
        }
      }
      const url = `${this.apiBaseUrl}/weather`;
      this.http.get<any>(url, params).subscribe({
        next: (data) => {
          const apiWeather: Weather = {
            id: index + 1,
            city: data.name,
            temperature: Math.round(data.main.temp),
            condition: data.weather[0].main,
            humidity: data.main.humidity,
            windSpeed: Math.round(data.wind.speed),
            hasDescription: data.weather[0].description ? true : false,
            description: data.weather[0].description ? data.weather[0].description : '',
          };
          this.weathersFromApi.update((list) => [...list, apiWeather]);
          this.isLoading.set(false);
        },
        error: (err) => {
          console.error(`Failed to load nearby ${city} weather`, err);
          this.errorMessage.set('Fail to load weather');
          this.isLoading.set(false);
        },
      });
    });
  }

  /**
   * Computed signal that filters the weather list based on the selected condition
   * @param condition String
   * @return weathers
   */
  readonly filterWeather = computed(() =>
    {
      const condition = this.selectedCondition();

      if (condition === 'Sunny') {
        return this.weatherList().filter((item) => item.condition === this.selectedCondition());
      }else if (condition === 'Rainy') {
        return this.weatherList().filter((item) => item.condition === this.selectedCondition());
      }else if (condition === 'Cloudy') {
        return this.weatherList().filter((item) => item.condition === this.selectedCondition());
      }
      return this.weatherList();
    });

  /**
   * Adds a new weather item to the reactive weather signal list
   * @param newWeather
   */
  addWeather(newWeather: Weather) {
    this.weathersFromApi.update((list) => [...list, newWeather]);
  }

  /**
   * Removes a weather item from the list by its unique ID
   * @param id
   */
  removeWeather(id: number) {
    this.weathersFromApi.update((list) => list.filter((item) => item.id !== id));
  }

  /**
   * Finds and returns a specific weather item by its unique ID
   * @param id
   */
  getWeatherById(id: number): Weather | undefined {
    console.log('Weather Id : ', id);
    return this.weathersFromApi().find((w) => w.id === id);
  }

  /**
   * Updates an existing weather item in the list with new data
   * @param updatedWeather
   */
  updateWeather(updatedWeather: Weather): void{
    this.weatherList.update((item) => item.map((w)=> w.id === updatedWeather.id ? updatedWeather : w));
  }
}
