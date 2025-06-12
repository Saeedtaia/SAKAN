import { ToastService } from './../toaster/toast.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';
import { CookieService } from 'ngx-cookie-service';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private accessTokenKey = 'accessToken';
  private refreshTokenKey = 'refreshToken';
  private userIdKey = 'userId';
  constructor(private Http: HttpClient, private Router: Router, private cookieService: CookieService, private toast: ToastService) { }


  SignIn(data: any): Observable<any> {
    return this.Http.post(`${environment.apiUrl}authentication/sign-in`, data);
  }



  saveTokens(response: AuthResponse): void {
    const accessToken = response.data.accessToken;
    const refreshToken = response.data.refreshToken.tokenString;
    const userId = response.data.userId;

    // Parse the expireAt string to a Date object
    const expireAt = new Date(response.data.refreshToken.expireAt);
    this.setAutoLogout(expireAt);



    // Pass the exact expiry date
    this.cookieService.set('accessToken', accessToken, expireAt, '/', '', false, 'Strict');
    this.cookieService.set('refreshToken', refreshToken, expireAt, '/');
    this.cookieService.set('userId', userId, expireAt, '/');

  }
  setAutoLogout(expireAt: Date) {
    const timeUntilExpiry = new Date(expireAt).getTime() - Date.now();
    console.log(`Time until expiry: ${timeUntilExpiry} milliseconds`);


    if (timeUntilExpiry == 0) {
      setTimeout(() => {
        this.toast.info("Authentication", 'Your session has expired. Please log in again.');
        this.logout();
      }, timeUntilExpiry);
    }
  }





  getAccessToken(): string | null {
    return this.cookieService.get('accessToken') || null;
  }
  // auth.service.ts
  refreshToken() {
    const accessToken = this.getAccessToken();
    const refreshToken = this.getRefreshToken();

    const formData = new FormData();
    formData.append('AccessToken', accessToken ?? '');
    formData.append('RefreshToken', refreshToken ?? '');

    return this.Http.post<any>(`${environment.apiUrl}authentication/refresh-token`, formData);
  }


  getRefreshToken(): string | null {
    return this.cookieService.get('refreshToken') || null;
  }

  logout(): void {
    this.cookieService.delete('accessToken');
    this.cookieService.delete('refreshToken');
    this.cookieService.delete('userId');
    this.Router.navigate(['/Auth/Sign-In']);

  }

  isLoggedIn(): boolean {
    return !!this.getAccessToken();
  }
}
export interface AuthResponse {
  statusCode: number;
  message: string;
  succeeded: boolean;
  meta?: any;
  errors?: any;
  data: {
    userId: string;
    accessToken: string;
    refreshToken: {
      userName: string;
      tokenString: string;
      expireAt: string;
    };
  };
}