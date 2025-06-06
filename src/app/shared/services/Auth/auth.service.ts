import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private accessTokenKey = 'accessToken';
  private refreshTokenKey = 'refreshToken';
  private userIdKey = 'userId';
  constructor(private Http: HttpClient) { }


  SignIn(data: any): Observable<any> {
    return this.Http.post(`${environment.apiUrl}authentication/sign-in`, data);
  }




  saveTokens(response: AuthResponse): void {
    localStorage.setItem(this.accessTokenKey, response.data.accessToken);
    localStorage.setItem(this.refreshTokenKey, response.data.refreshToken.tokenString);
    localStorage.setItem(this.userIdKey, response.data.userId);
  }


  getAccessToken(): string | null {
    return localStorage.getItem(this.accessTokenKey);
  }
  // auth.service.ts
  refreshToken(accessToken: string, refreshToken: string) {
    const formData = new FormData();
    formData.append('AccessToken', accessToken);
    formData.append('RefreshToken', refreshToken);

    return this.Http.post<any>(`/api/v1/authentication/refresh-token`, formData);
  }


  getRefreshToken(): string | null {
    return localStorage.getItem(this.refreshTokenKey);
  }

  logout(): void {
    localStorage.removeItem('accessToken');
    localStorage.removeItem('refreshToken');
    localStorage.removeItem('userId');
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
