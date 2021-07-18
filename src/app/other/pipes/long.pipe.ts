import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'long'
})
export class LongPipe implements PipeTransform {
  transform(value: string, length: number): string {
    if (value.length >= length) {
      return value.split('').splice(0, length).join('') + '...';
    } else {
      return value;
    }
  }
}
