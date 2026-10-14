import { TestBed } from '@angular/core/testing';
import { MockWeatherService } from './mock-weather-service';

describe('MockWeatherService', () => {
  let service: MockWeatherService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MockWeatherService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
