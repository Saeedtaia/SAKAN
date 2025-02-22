// translation.utils.ts - Updated Service
import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { Observable, of, tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TranslationService {
  constructor(private translocoService: TranslocoService) {}

  // Add static method for direct access
  static getTranslation(key: string, params?: Record<string, unknown>): string {
    let text: any;
    this.instance.translocoService
      .selectTranslate(key, params)
      .pipe(tap((value) => (text = value)))
      .subscribe();
    return text;
  }

  // Instance method for observables
  getTranslationObservable(
    key: string,
    params?: Record<string, unknown>
  ): Observable<string> {
    return this.translocoService.selectTranslate(key, params);
  }

  private static instance: TranslationService;
}
