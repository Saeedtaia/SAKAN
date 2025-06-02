import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'removeBackslashes',
  standalone: true
})
export class RemoveBackslashesPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) { }

  transform(value: string): SafeHtml {
    if (!value) return '';

    // Remove backslashes
    let cleaned = value.replace(/\\/g, '');

    // Remove width and height
    cleaned = cleaned.replace(/width="[^"]*"/g, '');
    cleaned = cleaned.replace(/height="[^"]*"/g, '');

    // Add class to iframe
    cleaned = cleaned.replace(
      /<iframe([^>]*)>/,
      '<iframe class="w-full h-full"$1>'
    );

    // Sanitize to allow binding
    return this.sanitizer.bypassSecurityTrustHtml(cleaned);
  }

}
