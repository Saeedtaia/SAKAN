import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BuildDetailsService {
  private http = inject(HttpClient);
  constructor() { }

  // Method to get the build details by ID
  getBuildDetailsById(buildId: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}buildings/${buildId}`);
  }
}
