import { Injectable } from '@angular/core';
import { HttpParams, HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private http: HttpClient) { }

  GetAllEmployees(PageNumber: number, PageSize: number, Search: string): Observable<any> {
    let params = new HttpParams()
      .set('PageNumber', PageNumber.toString())
      .set('PageSize', PageSize.toString());

    if (Search) {
      params = params.set('Search', Search);
    }
    return this.http.get<any>(`${environment.apiUrl}employee/paginated`, { params });
  }

  GetEmployeeById(id: number): Observable<any> {
    return this.http.get<any>(`${environment.apiUrl}employee/${id}`);
  }

  DeleteEmployee(id: number): Observable<any> {
    return this.http.delete<any>(`${environment.apiUrl}employee/${id}`);
  }
  AddEmployee(employee: any): Observable<any> {
    return this.http.post<any>(`${environment.apiUrl}employee/create`, employee);
  }
}
