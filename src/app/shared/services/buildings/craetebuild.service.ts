import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CraetebuildService {

  constructor(private http: HttpClient) { }
  CreateBuild(data: any) {
    return this.http.post<any>(`${environment.apiUrl}buildings/Create`, data);
  }

  DeleteBuild(id: number) {
    return this.http.delete<any>(`${environment.apiUrl}buildings/${id}`);
  }

  UpdateBuild(data: any) {
    return this.http.put<any>(`${environment.apiUrl}buildings/Update`, data);
  }
}
