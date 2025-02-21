import { Injectable, inject } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpParams,
  HttpResponse,
} from '@angular/common/http';
import { Observable, catchError, retry, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private apiUrl = 'https://ecommerce.routemisr.com/api/v1/products';
  private http = inject(HttpClient);

  // Cache for products
  private cache = new Map<string, HttpResponse<any>>();

  /**
   * Fetch products with optional query params
   * @param page Pagination page number (default: 1)
   * @param limit Number of items per page (default: 10)
   * @param filter Filter criteria (optional)
   * @param search Search keyword (optional)
   * @returns Observable with API response
   */
  getProducts(
    page: number = 1,
    limit: number = 10,
    filter?: string,
    search?: string
  ): Observable<any> {
    let params = new HttpParams().set('page', page).set('limit', limit);

    if (filter) params = params.set('filter', filter);
    if (search) params = params.set('search', search);

    const urlWithParams = `${this.apiUrl}?${params.toString()}`;

    // Check if the response is cached
    if (this.cache.has(urlWithParams)) {
      console.log('Returning cached response for:', urlWithParams);
      return new Observable((observer) => {
        observer.next(this.cache.get(urlWithParams)?.body);
        observer.complete();
      });
    }

    return this.http.get<any>(urlWithParams, { observe: 'response' }).pipe(
      retry(2), // Retry twice before failing
      tap((response) => {
        this.cache.set(urlWithParams, response); // Store response in cache
      }),
      catchError(this.handleError)
    );
  }

  /**
   * Fetch a single product by ID
   * @param id Product ID
   * @returns Observable with product details
   */
  getProductById(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;

    if (this.cache.has(url)) {
      console.log('Returning cached product:', id);
      return new Observable((observer) => {
        observer.next(this.cache.get(url)?.body);
        observer.complete();
      });
    }

    return this.http.get<any>(url, { observe: 'response' }).pipe(
      retry(2),
      tap((response) => this.cache.set(url, response)),
      catchError(this.handleError)
    );
  }

  /**
   * Clear the cache manually
   */
  clearCache(): void {
    this.cache.clear();
    console.log('Cache cleared');
  }

  /**
   * Handle HTTP errors
   * @param error HTTP error response
   * @returns Throws an error message
   */
  private handleError(error: HttpErrorResponse) {
    console.error('Error fetching data:', error);
    let errorMessage = 'Something went wrong! Please try again later.';

    if (error.error instanceof ErrorEvent) {
      errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      errorMessage = `Server-side error: ${error.status} - ${error.message}`;
    }

    return throwError(() => new Error(errorMessage));
  }
}
