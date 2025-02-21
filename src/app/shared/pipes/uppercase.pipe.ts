// uppercase.pipe.ts
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'Uppercase',
  standalone: true,
})
export class CustomUppercasePipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }
}
