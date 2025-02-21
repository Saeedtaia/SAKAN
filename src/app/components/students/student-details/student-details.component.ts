// student-details.component.ts
import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AvatarModule } from 'primeng/avatar';
import { Student } from '../../../shared/data/student/student';
import { FAKE_STUDENTS } from '../../../shared/samples/student/mock-students';
import {DatePipe} from '@angular/common';
import {
  GenderTranslatePipe,
  ArabicNumberPipe
} from '../../../shared/pipes/studentdatatransformation.pipe';

@Component({
  selector: 'app-student-details',
  standalone: true,
  imports: [AvatarModule,DatePipe,GenderTranslatePipe,ArabicNumberPipe],
  templateUrl: './student-details.component.html',
  styleUrl: './student-details.component.scss'
})
export class StudentDetailsComponent implements OnInit {
  filterdStudent: Student | undefined;
  currentDate = new Date();
  private route = inject(ActivatedRoute);
  private students: Student[] = FAKE_STUDENTS;

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const studentId = params.get('StudentId');
      if (studentId) {
        this.filterdStudent = this.students.find(s => s.nationalID.toString() === studentId);
      }
    });
  }

  // Temporary translation methods (replace with pipes/services)
  getTranslatedGender(gender: string): string {
    return gender === 'M' ? 'ذكر' : 'أنثى';
  }

  getMaritalStatus(isMarried: boolean): string {
    return isMarried ? 'متزوج' : 'أعزب';
  }
}
