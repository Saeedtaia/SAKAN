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
  ],
  templateUrl: './students-list.component.html',
  styleUrl: './students-list.component.scss',
  providers: [PrimeNG],
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
    private primengConfig: PrimeNG,
    private translocoService: TranslocoService
  ) {}

  ngOnInit(): void {
    this.setupTranslations();

    // Simulate API call
    setTimeout(() => {
      this.students = [...FAKE_STUDENTS];
      this.loading = false;
    }, 1000);
  }

  private setupTranslations() {
    // Initial load
    this.translocoService
      .selectTranslateObject('primeng')
      .subscribe((translations) => {
        this.primengConfig.setTranslation(translations);
      });

    // Language change listener
    this.translocoService.langChanges$.subscribe((lang) => {
      this.translocoService
        .selectTranslateObject('primeng')
        .subscribe((translations) => {
          this.primengConfig.setTranslation(translations);
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
}
