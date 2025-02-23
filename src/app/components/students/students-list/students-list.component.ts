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
  ],
  providers: [PrimeNG],
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.scss',
})
export class StudentsListComponent implements OnInit {
  students: Student[] = [];
  loading: boolean = true;
  selectedGender: string | null = null;

  genders = [
    { label: 'genders.male', value: 'M' },
    { label: 'genders.female', value: 'F' },
  ];

  constructor(
    public PrimeNG: PrimeNG,
    public translocoService: TranslocoService
  ) {}

  ngOnInit(): void {
    this.setupTranslations();

    setTimeout(() => {
      this.students = [...FAKE_STUDENTS];
      this.loading = false;
    }, 1000);
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
    gender: string
  ): 'success' | 'info' | 'warn' | 'danger' | 'contrast' | undefined {
    switch (gender) {
      case 'M':
        return 'info';
      case 'F':
        return 'danger';
      default:
        return 'warn';
    }
  }
  getCurrentDate(): Date {
    return new Date();
  }
}
