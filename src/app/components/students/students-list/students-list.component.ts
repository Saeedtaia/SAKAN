import { Component, OnInit } from '@angular/core';
import { Table } from 'primeng/table';
import { CommonModule } from '@angular/common';
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
@Component({
    selector: 'app-students-list',
    imports: [
        RouterLink,
        CommonModule,
        InputTextModule,
        TagModule,
        ButtonModule,
        DropdownModule,
        FormsModule,
        TableModule,
        IconField,
        InputIcon,
    ],
    templateUrl: './students-list.component.html',
    styleUrl: './students-list.component.scss'
})
export class StudentsListComponent implements OnInit {
  students: Student[] = [];
  loading: boolean = true;
  selectedGender: string | null = null;

  genders = [
    { label: 'Male', value: 'M' },
    { label: 'Female', value: 'F' },
  ];

  ngOnInit(): void {
    // Simulate API call
    setTimeout(() => {
      this.students = [...FAKE_STUDENTS];
      this.loading = false;
    }, 1000);
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
