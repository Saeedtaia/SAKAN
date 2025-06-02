import { Injectable, inject } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpResponse,
} from '@angular/common/http';
import { Observable, catchError, retry, tap, throwError } from 'rxjs';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BuildsListService {
  private http = inject(HttpClient);
  private cache = new Map<string, HttpResponse<any>>();
  private buildsUrl = `${environment.apiUrl}buildings/List`;

  GatAllBuilds(): Observable<any> {
    return this.http.get(this.buildsUrl)
  }


  /**
   * Get the list of buildings with caching.
   */
  GetBuildsList(): Observable<any> {
    if (this.cache.has(this.buildsUrl)) {
      console.log('Returning cached buildings list');
      return new Observable((observer) => {
        observer.next(this.cache.get(this.buildsUrl)?.body);
        observer.complete();
      });
    }

    return this.http.get<any>(this.buildsUrl, { observe: 'response' }).pipe(
      retry(2),
      tap((response) => {
        this.cache.set(this.buildsUrl, response);
      }),
      catchError(this.handleError)
    );
  }

  /**
   * Clear the cache manually
   */
  clearCache(): void {
    this.cache.clear();
    console.log('Buildings list cache cleared');
  }

  /**
   * Handle HTTP errors
   */
  private handleError(error: HttpErrorResponse) {
    console.error('Error fetching buildings list:', error);
    let errorMessage = 'Something went wrong! Please try again later.';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      errorMessage = `Server-side error: ${error.status} - ${error.message}`;
    }
    return throwError(() => new Error(errorMessage));
  }
}
