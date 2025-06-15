import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Newstudent } from '../../interfaces/student';
import { environment } from '../../../../environments/environment';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  getStudents(): Observable<getstudentsResponse> {
    return this.http.get<getstudentsResponse>(`${environment.apiUrl}new-student/list`);
  }


  GetOldStudents(): Observable<any> {
    return this.http.get(`${environment.apiUrl}old-student/list`)
  }

  getPaginatedAttendance(
    pageNumber: number,
    pageSize: number,
    dateTime: Date,
    studentNationalId?: string
  ): Observable<any> {
    let params = new HttpParams()
      .set('PageNumber', pageNumber)
      .set('PageSize', pageSize)
      .set('dateTime', dateTime.toISOString());

    if (studentNationalId) {
      params = params.set('StudentNationalId', studentNationalId);
    }

    return this.http.get(`${environment.apiUrl}attendance/paginated`, { params });
  }
}
export interface getstudentsResponse {
  statusCode: number
  message: string
  succeeded: boolean
  meta: any
  errors: any
  data: Newstudent[]
}