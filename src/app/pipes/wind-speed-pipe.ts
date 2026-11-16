import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'windSpeed',
})
export class WindSpeedPipe implements PipeTransform {
  transform(value: number, unit: string): string {
    if(value === null || value === undefined) {
      return 'Expected a number';
    }else if(unit.trim() === '' || unit === null || unit === undefined) {
      return 'Expected a The unit';
    }else {
      return value.toString()+" "+unit;
    }
  }
}
