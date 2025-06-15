// src/app/interceptors/error.interceptor.ts
import { Injectable } from '@angular/core';
import {
 HttpInterceptor, HttpRequest, HttpHandler, HttpEvent, HttpErrorResponse
} from '@angular/common/http';
import { Observable, throwError, EMPTY } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/Auth/auth.service';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
 constructor(
  private authService: AuthService,
  private router: Router,
  private messageService: MessageService
 ) { }

 intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  return next.handle(req).pipe(
   catchError((err: HttpErrorResponse) => {
    if (err.status === 401 || err.status === 403) {
     // optional logout
     this.authService.logout();
     this.router.navigate(['/unauthorized']);
     this.messageService.add({
      severity: 'warn',
      summary: 'Access Denied',
      detail: 'Your session has expired or you lack permission.'
     });
     return EMPTY; // prevent firing component-level error logic
    }
    return throwError(() => err); // other errors are forwarded
   })
  );
 }
}
