// error-handling.interceptor.ts
import {
  HttpInterceptorFn,
  HttpRequest,
  HttpHandlerFn,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { inject } from '@angular/core';
import { ToastService } from '../services/toaster/toast.service';
export const errorHandlingInterceptor: HttpInterceptorFn = (
  req: HttpRequest<any>,
  next: HttpHandlerFn
) => {
  const toast = inject(ToastService);

  return next(req).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error('Error intercepted:', error);

      if (error.status === 0) {
        toast.error('Network Error', 'Check your internet connection.');
      } else if (error.status >= 500) {
        toast.error('Server Error', 'Something went wrong on the server.');
      } else if (error.status === 401) {
        toast.error('Unauthorized', 'You are not authorized. Please login again.');
      } else {
        toast.error('Error', error.message || 'An unexpected error occurred.');
      }
      return throwError(() => error);
    })
  );
};
