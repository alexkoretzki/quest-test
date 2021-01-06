import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'NumToHours' })
export class NumToHoursPipe implements PipeTransform {
  transform(value: number): string {
    var hours = Math.floor(value / 60);
    var minutes = value % 60;
    return `${hours}h : ${minutes}m`;
  }
}
