import { NewStudent } from './../../../shared/data/voilance/violation.model';
import { ToastService } from './../../../shared/services/toaster/toast.service';
import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { PrimeNG } from 'primeng/config';
import { TranslocoService } from '@ngneat/transloco';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { Student } from '../../../shared/data/student/student';
import { FAKE_STUDENTS } from '../../../shared/samples/student/mock-students';
import { IconField } from 'primeng/iconfield';
import { InputIcon } from 'primeng/inputicon';
import { RouterLink } from '@angular/router';
import { TranslocoPipe } from '@ngneat/transloco';
import { CalendarModule } from 'primeng/calendar';
import { StudentService } from '../../../shared/services/student/student.service';
import { Newstudent, OldStudent } from '../../../shared/interfaces/student';
import { TabsModule } from 'primeng/tabs';
@Component({
  selector: 'app-students-list',
  standalone: true,
  imports: [
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
    TabsModule
  ],
  providers: [PrimeNG],
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.scss',
})
export class StudentsListComponent implements OnInit {
  selectedTab: string = '1'; // or number, depending on your tab values

  onTabChange(event: string | number) {
    if (this.selectedTab === '0') {
      this.StudentService.getStudents().subscribe({
        next: (res) => {
          // console.log('res loaded:', res);
          this.NewStudent = res.data;
          if (this.NewStudent.length > 10) {
            this.baginator = true
          }
          this.loading = false;
          this.ToastService.success("Students", res.message);
        },
      })
    } else if (this.selectedTab === '1') {
      this.StudentService.GetOldStudents().subscribe({
        next: (res) => {
          this.OldStudents = res.data
          if (this.NewStudent.length > 10) {
            this.baginatorOld = true
          }
          this.loadingOld = false
          this.ToastService.success("Students", res.message);
        }
      })
    }
  }

  loading: boolean = true;
  loadingOld: boolean = true;
  selectedGender: string | null = null;
  NewStudent: Newstudent[] = [];
  OldStudents: OldStudent[] = []
  baginator: boolean = false
  baginatorOld: boolean = false

  genders = [
    { label: 'genders.male', value: 0 },
    { label: 'genders.female', value: 1 },
  ];

  constructor(
    public PrimeNG: PrimeNG,
    public translocoService: TranslocoService,
    private StudentService: StudentService,
    private ToastService: ToastService
  ) { }

  ngOnInit(): void {
    if (this.selectedTab === '0') {
      this.StudentService.getStudents().subscribe({
        next: (res) => {
          // console.log('res loaded:', res);
          this.NewStudent = res.data;
          if (this.NewStudent.length > 10) {
            this.baginator = true
          }
          this.loading = false;
          this.ToastService.success("Students", res.message);
        },
      })
    } else if (this.selectedTab === '1') {
      this.StudentService.GetOldStudents().subscribe({
        next: (res) => {
          this.OldStudents = res.data
          if (this.NewStudent.length > 10) {
            this.baginatorOld = true
          }
          this.loadingOld = false
          this.ToastService.success("Students", res.message);
        }
      })
    }

    this.setupTranslations();

  }

  private setupTranslations() {
    this.translocoService
      .selectTranslateObject('primeng')
      .subscribe((translations) => {
        this.PrimeNG.setTranslation({
          ...translations,
          dayNames: translations['dayNames'],
          dayNamesShort: translations['dayNamesShort'],
          dayNamesMin: translations['dayNamesMin'],
          monthNames: translations['monthNames'],
          monthNamesShort: translations['monthNamesShort'],
          today: translations['today'],
          weekHeader: translations['weekHeader'],
          firstDayOfWeek: parseInt(translations['firstDayOfWeek']),
          dateFormat: translations['dateFormat'],
        });
      });

    this.translocoService.langChanges$.subscribe(() => {
      this.translocoService
        .selectTranslateObject('primeng')
        .subscribe((translations) => {
          this.PrimeNG.setTranslation({
            ...translations,
            dayNames: translations['dayNames'],
            dayNamesShort: translations['dayNamesShort'],
            dayNamesMin: translations['dayNamesMin'],
            monthNames: translations['monthNames'],
            monthNamesShort: translations['monthNamesShort'],
            today: translations['today'],
            weekHeader: translations['weekHeader'],
            firstDayOfWeek: parseInt(translations['firstDayOfWeek']),
            dateFormat: translations['dateFormat'],
          });
        });
    });
  }

  clear(table: Table) {
    table.clear();
    this.selectedGender = null;
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

  getCurrentDate(): Date {
    return new Date();
  }
}
