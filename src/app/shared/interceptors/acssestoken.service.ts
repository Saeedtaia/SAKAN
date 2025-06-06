import { AuthService } from './../services/Auth/auth.service';
// auth.interceptor.ts
import { Injectable } from '@angular/core';
import {
  HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError, BehaviorSubject } from 'rxjs';
import { catchError, switchMap, filter, take, finalize } from 'rxjs/operators';
@Injectable()
export class TokenInterceptor implements HttpInterceptor {
  private isRefreshing = false;
  private refreshTokenSubject = new BehaviorSubject<string | null>(null);

  constructor(private authService: AuthService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const accessToken = this.authService.getAccessToken();
    const cloned = accessToken
      ? req.clone({ headers: req.headers.set('Authorization', `Bearer ${accessToken}`) })
      : req;

    return next.handle(cloned).pipe(
      catchError(error => {
        if (error instanceof HttpErrorResponse && error.status === 401) {
          return this.handle401Error(cloned, next);
        }
        return throwError(() => error);
      })
    );
  }

  private handle401Error(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!this.isRefreshing) {
      this.isRefreshing = true;
      this.refreshTokenSubject.next(null);

      const accessToken = this.authService.getAccessToken();
      const refreshToken = this.authService.getRefreshToken();

      if (!accessToken || !refreshToken) {
        this.isRefreshing = false;
        return throwError(() => new Error('Missing tokens for refresh.'));
      }

      return this.authService.refreshToken(accessToken, refreshToken).pipe(
        switchMap((response: any) => {
          const newAccessToken = response.data.accessToken;
          const newRefreshToken = response.data.refreshToken.tokenString;

          this.authService.saveTokens(response); // Use the centralized save method

          this.refreshTokenSubject.next(newAccessToken);

          return next.handle(
            request.clone({
              headers: request.headers.set('Authorization', `Bearer ${newAccessToken}`)
            })
          );
        }),
        catchError(err => {
          this.authService.logout();
          return throwError(() => err);
        }),
        // 👇 Ensure this always runs
        finalize(() => {
          this.isRefreshing = false;
        })
      );
    } else {
      return this.refreshTokenSubject.pipe(
        filter(token => token !== null),
        take(1),
        switchMap(token =>
          next.handle(request.clone({ headers: request.headers.set('Authorization', `Bearer ${token}`) }))
        )
      );
    }
  }
}
