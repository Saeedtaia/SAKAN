import { Pipe, PipeTransform } from '@angular/core';
import { FormGroup } from '@angular/forms';
@Pipe({
  name: 'objtoarr',
  standalone: true,
})
export class ObjtoarrPipe implements PipeTransform {
  transform(formGroup: FormGroup, ...args: unknown[]): string[] {
    return formGroup ? Object.keys(formGroup.controls) : [];
  }
}
