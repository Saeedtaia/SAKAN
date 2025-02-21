import { provideStoreDevtools } from '@ngrx/store-devtools';
import {
  ApplicationConfig,
  provideZoneChangeDetection,
  isDevMode,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideAnimations } from '@angular/platform-browser/animations';
import { providePrimeNG } from 'primeng/config';
import Lara from '@primeng/themes/lara';
import {
  provideHttpClient,
  withInterceptors,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { errorHandlingInterceptor } from './shared/interceptors/error-handling.interceptor';
import { provideStore } from '@ngrx/store';
import { rootReducer } from './shared/store';
import { environment } from '../environments/environment';
import { TranslocoHttpLoader } from './transloco-loader';
import { provideTransloco } from '@ngneat/transloco';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAnimationsAsync(),
    provideAnimations(),
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
    provideStore(rootReducer),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: environment.production,
      trace: true,
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
