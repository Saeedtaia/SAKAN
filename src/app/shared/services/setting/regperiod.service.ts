import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RegperiodService {

  constructor(private http: HttpClient) { }
  GetAllPeriods(): Observable<any> {
    return this.http.get(`${environment.apiUrl}periods/list`)
  }

  DeletePeriod(id: number): Observable<any> {
    return this.http.delete(`${environment.apiUrl}periods/${id}`)
  }
  Closeperiod(data: any): Observable<any> {
    const params = new HttpParams().set('id', data.toString());
    return this.http.post(`${environment.apiUrl}periods/close?id=${data}`, {})
  }

  CreatePeriod(periodData: any): Observable<any> {
    return this.http.post(`${environment.apiUrl}periods/create`, {}, periodData)
  }

  UpdatePeriod(periodData: any): Observable<any> {
    return this.http.put(`${environment.apiUrl}periods/update`, periodData)
  }

  GetPeriod(id: number): Observable<any> {
    return this.http.get(`${environment.apiUrl}periods/${id}`)
  }

}
export interface periodform {
  id: number
  from: string
  to: string
  isClosed: boolean
  registrationFees: number
}
