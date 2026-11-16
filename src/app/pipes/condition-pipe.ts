import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'condition',
})
export class ConditionPipe implements PipeTransform {
  transform(value: string): string {
    if(value.trim() === '' || value === null || value === undefined) {
      return 'Expected an string';
    }
    console.log(value.trim().toLowerCase());
    switch(value.trim().toLowerCase()) {
      case 'clouds':
        return "Today's Weather is Cloudy";
      case 'sunny':
        return "Today's Weather is Sunny";
      case 'rain':
        return "Today's Weather is Rainy";
      case 'clear':
        return "Today's Weather is Clear";
      case 'thunderstorm':
        return "Today's Weather is Thunderstorm";
      case 'drizzle':
        return "Today's Weather is Drizzle";
      case 'snow':
        return "Today's Weather is Snow";
      case 'atmosphere':
        return "Today's Weather is Atmosphere";
      default:
        return "Today's Weather is Unknown";
    }
  }
}
