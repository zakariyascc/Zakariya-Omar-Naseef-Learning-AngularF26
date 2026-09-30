import { ComponentFixture, TestBed } from '@angular/core/testing';
import { WeatherListItem } from './weather-list-item';

describe('WeatherListItem', () => {
  let component: WeatherListItem;
  let fixture: ComponentFixture<WeatherListItem>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeatherListItem],
    }).compileComponents();

    fixture = TestBed.createComponent(WeatherListItem);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
