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

    // Remove width and height attributes
    cleaned = cleaned.replace(/width="[^"]*"/g, '');
    cleaned = cleaned.replace(/height="[^"]*"/g, '');

    // Clean up extra spaces
    cleaned = cleaned.replace(/\s{2,}/g, ' ');

    // Add Tailwind classes to all iframes
    cleaned = cleaned.replace(
      /<iframe([^>]*)>/g,
      (match, attrs) => {
        return attrs.includes('class=')
          ? `<iframe${attrs}>`
          : `<iframe class="w-full h-full"${attrs}>`;
      }
    );

    // Return sanitized HTML
    return this.sanitizer.bypassSecurityTrustHtml(cleaned);
  }
}
