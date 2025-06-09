// auth.interceptor.ts
import {
 HttpEvent,
 HttpHandler,
 HttpInterceptor,
 HttpRequest,
 HttpErrorResponse
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, switchMap, throwError } from 'rxjs';
import { CookieService } from 'ngx-cookie-service';
import { AuthService } from '../services/Auth/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
 private isRefreshing = false;

 constructor(
  private authService: AuthService,
  private cookieService: CookieService
 ) { }

 intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  const accessToken = this.authService.getAccessToken();

  let clonedReq = req;
  if (accessToken) {
   clonedReq = req.clone({
    setHeaders: {
     Authorization: `Bearer ${accessToken}`
    }
   });
  }

  return next.handle(clonedReq).pipe(
   catchError((error: HttpErrorResponse) => {
    if (error.status === 401 && !this.isRefreshing) {
     this.isRefreshing = true;
     return this.authService.refreshToken().pipe(
      switchMap((response) => {
       this.isRefreshing = false;

       const newAccessToken = response.data.accessToken;
       this.cookieService.set('accessToken', newAccessToken); // update cookie

       const retryReq = req.clone({
        setHeaders: {
         Authorization: `Bearer ${newAccessToken}`
        }
       });

       return next.handle(retryReq);
      }),
      catchError((err) => {
       this.isRefreshing = false;
       this.authService.logout();
       return throwError(() => err);
      })
     );
    }

    return throwError(() => error);
   })
  );
 }
}
