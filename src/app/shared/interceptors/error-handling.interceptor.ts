import { HttpInterceptorFn } from '@angular/common/http';
import {
  HttpRequest,
  HttpHandlerFn,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';

export const errorHandlingInterceptor: HttpInterceptorFn = (
  req,
  next: HttpHandlerFn
) => {
  return next(req).pipe(
    // ✅ Correct: Call `next` as a function, not `next.handle(req)`
    catchError((error: HttpErrorResponse) => {
      console.error('Error intercepted:', error);
      alert('Something went wrong!');
      return throwError(() => error); // ✅ Correct: Using `throwError` in RxJS 7+
    })
  );
};
