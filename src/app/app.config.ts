import {
  ApplicationConfig,
  CSP_NONCE,
  importProvidersFrom,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideAnimations } from '@angular/platform-browser/animations';
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeng/themes/lara';
import {
  provideHttpClient,
  HttpClientXsrfModule,
  withInterceptors,
  withInterceptorsFromDi,
  withXsrfConfiguration,
} from '@angular/common/http';
import { errorHandlingInterceptor } from './shared/interceptors/error-handling.interceptor';
import { TranslocoHttpLoader } from './transloco-loader';
import { provideTransloco } from '@ngneat/transloco';
import { environment } from '../environments/environment';
declare const MY_NONCE: string;
export const appConfig: ApplicationConfig = {
  providers: [
    {
      provide: CSP_NONCE,
      useValue: MY_NONCE, // Matches server's CSP header
    },
    // {
    //   provide: CSP_NONCE,
    //   useValue: (globalThis as any).myRandomNonceValue,
    // },
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideAnimations(),
    provideHttpClient(
      withXsrfConfiguration({
        cookieName: 'XSRF-TOKEN',
        headerName: 'X-XSRF-TOKEN',
      })
    ),
    provideHttpClient(withInterceptors([errorHandlingInterceptor])),
    provideHttpClient(withInterceptorsFromDi()),
    providePrimeNG({
      theme: {
        preset: Lara,
        options: {
          darkModeSelector: '.dark', // Apply when HTML has class "dark-mode"
        },
      },
    }),
    provideHttpClient(),
    provideTransloco({
      config: {
        availableLangs: ['en', 'ar'],
        defaultLang: 'en',
        // Remove this option if your application doesn't support changing language in runtime.
        reRenderOnLangChange: true,
        prodMode: environment.production,
      },
      loader: TranslocoHttpLoader,
    }),
  ],
};
