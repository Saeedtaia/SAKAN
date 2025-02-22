import { Pipe, PipeTransform } from '@angular/core';

// Add these pipes to your component/module
@Pipe({ name: 'genderTranslate' })
export class GenderTranslatePipe implements PipeTransform {
  transform(value: string): string {
    return value === 'M' ? 'ذكر' : 'أنثى';
  }
}

@Pipe({ name: 'arabicNumber' })
export class ArabicNumberPipe implements PipeTransform {
  private arabicNumbers = ['٠', 'الاولي', 'الثانية', 'الثالثة', 'الرابعة', 'الخامسة', 'السادسة', '٧', '٨', '٩'];
  transform(value: number): string {
    return value.toString().replace(/\d/g, digit => this.arabicNumbers[parseInt(digit)]);
  }
}

