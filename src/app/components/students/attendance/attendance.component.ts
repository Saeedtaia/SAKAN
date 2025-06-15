import { Component, OnInit } from '@angular/core';
import { StudentService } from '../../../shared/services/student/student.service';
import { DatePipe } from '@angular/common';
import { TableModule } from 'primeng/table';
import { BadgeModule } from 'primeng/badge';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule } from '@angular/forms';
import { ToastService } from './../../../shared/services/toaster/toast.service';
import { Table } from 'primeng/table';
import { PrimeNG } from 'primeng/config';
import { TranslocoService } from '@ngneat/transloco';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { Student } from '../../../shared/data/student/student';
import { FAKE_STUDENTS } from '../../../shared/samples/student/mock-students';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { RouterLink } from '@angular/router';
import { TranslocoPipe } from '@ngneat/transloco';
import { CalendarModule } from 'primeng/calendar';
import { Newstudent } from '../../../shared/interfaces/student';
import { TabsModule } from 'primeng/tabs';
@Component({
  selector: 'app-attendance',
  standalone: true,
  imports: [
    DatePipe,
    TableModule,
    BadgeModule,
    CardModule,
    InputTextModule,
    FormsModule,
    RouterLink,
    CommonModule,
    HttpClientModule,
    InputTextModule,
    TagModule,
    ButtonModule,
    DropdownModule,
    FormsModule,
    TableModule,
    IconField,
    InputIcon,
    TranslocoPipe,
    CalendarModule,
    TabsModule],
  providers: [PrimeNG],
  templateUrl: './attendance.component.html',
  styleUrl: './attendance.component.scss'
})
export class AttendanceComponent implements OnInit {
  attend: studentAttend[] = [];
  loading = true;
  baginator: boolean = false
  constructor(private StudentService: StudentService,
    public PrimeNG: PrimeNG,
    public translocoService: TranslocoService,
    private ToastService: ToastService
  ) { }
  ngOnInit(): void {
    this.StudentService.getPaginatedAttendance(1, 1, new Date()).subscribe({
      next: (res) => {
        this.attend = res.data
        this.attend = [
          {
            "firstName": 'string',
            "secondName": 'string',
            "thirdName": 'string',
            "fourthName": 'string',
            "nationalId": 'string',
            "in": false,
            "out": true
          }
        ]
        this.loading = false
        if (this.attend.length > 10) {
          this.baginator = true

        }
        console.log(res)
      }

    })
  }

  getSeverity(
    gender: number
  ): 'success' | 'info' | 'warn' | 'danger' | 'contrast' | undefined {
    switch (gender) {
      case 0: // Male
        return 'info';
      case 1: // Female
        return 'danger';
      default:
        return 'warn';
    }
  }
  clear(table: Table) {
    table.clear();
  }
}
export interface studentAttend {
  "firstName": string,
  "secondName": string,
  "thirdName": string,
  "fourthName": string,
  "nationalId": string,
  "in": false,
  "out": true
}