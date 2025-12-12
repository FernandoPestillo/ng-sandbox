import {
  ApplicationConfig,
  LOCALE_ID,
  provideBrowserGlobalErrorListeners,
  provideZoneChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withInterceptorsFromDi } from '@angular/common/http';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideToastr } from 'ngx-toastr';
import { registerLocaleData } from '@angular/common';
import localePt from '@angular/common/locales/pt';
import localeEs from '@angular/common/locales/es';

registerLocaleData(localePt);
registerLocaleData(localeEs);

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(withInterceptorsFromDi()),
    provideAnimations(),
    provideToastr({
      enableHtml: true,
      closeButton: true,
      tapToDismiss: false,
      timeOut: 3000,
      extendedTimeOut: 3000,
      progressBar: true,
    }),
    { provide: LOCALE_ID, useValue: navigator.language },
  ],
};
