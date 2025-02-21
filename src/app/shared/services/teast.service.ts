import { Injectable, inject } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
} from '@angular/common/http';
import { Observable, catchError, retry, tap, throwError, of, delay } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://ecommerce.routemisr.com/api/v1/products';
  private http = inject(HttpClient);
  private cache = new Map<string, any>();

  getProducts(
    page: number = 1,
    limit: number = 10,
    filter?: string,
    search?: string
  ): Observable<any> {
    const params = this.normalizeParams({ page, limit, filter, search });
    const urlWithParams = `${this.apiUrl}?${params.toString()}`;

    if (this.cache.has(urlWithParams)) {
      return of(this.cache.get(urlWithParams)).pipe(
        tap(() => console.log('Returning cached response:', urlWithParams)),
        delay(0)
      );
    }

    return this.http.get<any>(urlWithParams).pipe(
      retry(2),
      tap((response) => {
        this.cache.set(urlWithParams, response);
        console.log('Cached new response:', urlWithParams);
      }),
      catchError(this.handleError) // ✅ Now properly defined
    );
  }

  private normalizeParams(params: {
    [key: string]: string | number | undefined;
  }): HttpParams {
    const sortedKeys = Object.keys(params)
      .filter((key) => params[key] != null)
      .sort();

    let httpParams = new HttpParams();
    sortedKeys.forEach((key) => {
      httpParams = httpParams.set(key, params[key]!.toString());
    });
    return httpParams;
  }

  getProductById(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;

    if (this.cache.has(url)) {
      return of(this.cache.get(url)).pipe(delay(0));
    }

    return this.http.get<any>(url).pipe(
      retry(2),
      tap((response) => this.cache.set(url, response)),
      catchError(this.handleError) // ✅ Works here too
    );
  }

  clearCache(): void {
    this.cache.clear();
    console.log('Cache cleared');
  }

  // ✅ Add the missing error handler
  private handleError(error: HttpErrorResponse) {
    console.error('HTTP Error:', error);
    let errorMessage = 'An unknown error occurred!';

    if (error.status === 0) {
      errorMessage = 'Network error. Please check your internet connection.';
    } else if (error.error instanceof ErrorEvent) {
      errorMessage = `Client error: ${error.error.message}`;
    } else {
      errorMessage = `Server error: ${error.status} - ${error.error.message || error.message}`;
    }

    return throwError(() => new Error(errorMessage));
  }
}
