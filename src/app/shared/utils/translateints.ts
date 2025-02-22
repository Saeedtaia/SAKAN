import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';

@Injectable({
  providedIn: 'root', // Or specify your desired provider scope
})
export class TranslationService {
  constructor(private transloco: TranslocoService) {}

  saeedTranslate(key: string, fallback: string = ''): string {
    try {
      let translation = '';
      this.transloco.selectTranslate(key).subscribe((translatedText) => {
        console.log(translatedText);
        translation = translatedText;
      });

      return translation && translation !== key ? translation : fallback;
    } catch (error) {
      console.warn(`Translation error for key "${key}":`, error);
      return fallback;
    }
  }
}
