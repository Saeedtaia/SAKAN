import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { student } from '../../interfaces/student';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http: HttpClient) { }
  getStudents(): Observable<getstudentsResponse> {
    return this.http.get<getstudentsResponse>(`${environment.apiUrl}new-student/list`);
  }
}
export interface getstudentsResponse {
  statusCode: number
  message: string
  succeeded: boolean
  meta: any
  errors: any
  data: student[]
}