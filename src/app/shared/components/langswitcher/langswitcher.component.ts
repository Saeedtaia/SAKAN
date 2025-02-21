// language-switcher.component.ts
import {
  Component,
  signal,
  effect,
  HostListener,
  ChangeDetectionStrategy,
  inject,
} from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { animate, style, transition, trigger } from '@angular/animations';
import { CustomUppercasePipe } from '../../pipes/uppercase.pipe';

interface LanguageConfig {
  code: string;
  label: string;
  flag: string;
  direction: 'ltr' | 'rtl';
}

@Component({
  selector: 'app-langswitcher',
  imports: [CustomUppercasePipe],
  templateUrl: './langswitcher.component.html',
  styleUrl: './langswitcher.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('slideInOut', [
      transition(':enter', [
        style({ opacity: 0, transform: 'translateY(-10px)' }),
        animate(
          '200ms ease-out',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]),
      transition(':leave', [
        animate(
          '200ms ease-in',
          style({ opacity: 0, transform: 'translateY(-10px)' })
        ),
      ]),
    ]),
  ],
})
export class LanguageSwitcherComponent {
  private transloco = inject(TranslocoService);
  isOpen = signal(false);
  currentLanguage = signal<LanguageConfig>(this.getCurrentLanguage());

  // Supported languages configuration
  languages: LanguageConfig[] = [
    {
      code: 'en',
      label: 'English',
      flag: '🇬🇧',
      direction: 'ltr',
    },
    {
      code: 'ar',
      label: 'العربية',
      flag: '🇸🇦',
      direction: 'rtl',
    },
    {
      code: 'fr',
      label: 'Français',
      flag: '🇫🇷',
      direction: 'ltr',
    },
  ];

  constructor() {
    // Persist language selection
    effect(() => {
      const lang = this.currentLanguage();
      localStorage.setItem('preferredLanguage', lang.code);
      document.documentElement.lang = lang.code;
      document.documentElement.dir = lang.direction;
    });
  }

  toggleSwitcher() {
    this.isOpen.update((v) => !v);
  }

  selectLanguage(lang: LanguageConfig) {
    this.transloco.setActiveLang(lang.code);
    this.currentLanguage.set(lang);
    this.isOpen.set(false);
  }

  private getCurrentLanguage(): LanguageConfig {
    const savedLang = localStorage.getItem('preferredLanguage');
    const defaultLang = this.transloco.getDefaultLang() || 'en'; // Ensure a fallback

    console.log('Saved Language:', savedLang);
    console.log('Default Language from Transloco:', defaultLang);

    return (
      this.languages.find((l) => l.code === savedLang) ||
      this.languages.find((l) => l.code === defaultLang) ||
      this.languages[0] // Final fallback to first available language
    );
  }

  @HostListener('document:keydown.escape')
  onEscKey() {
    this.isOpen.set(false);
  }

  @HostListener('document:click', ['$event'])
  onClickOutside(event: MouseEvent) {
    if (!(event.target as HTMLElement).closest('.language-switcher')) {
      this.isOpen.set(false);
    }
  }
}
