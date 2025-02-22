import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LanguageService {
  constructor(private TranslocoService: TranslocoService) {}
  private currentLang = new BehaviorSubject<'en' | 'ar'>('en');
  currentLang$ = this.currentLang.asObservable();

  setLanguage(lang: 'en' | 'ar') {
    this.currentLang.next(lang);
    this.TranslocoService.setActiveLang(lang);
    console.log(this.TranslocoService.getActiveLang, 'sssssss');
  }
}
