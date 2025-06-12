import { Component, ElementRef, OnInit, QueryList, ViewChildren, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastService } from './../../../shared/services/toaster/toast.service';
import { EmployeesService } from '../../../shared/services/EMP/employees.service';
import { Employee } from '../../../shared/interfaces/employee';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { NgClass, NgFor, NgIf } from '@angular/common';
import { CardModule } from 'primeng/card';
import { AvatarModule } from 'primeng/avatar';
import { TooltipModule } from 'primeng/tooltip';
import { Dialog } from 'primeng/dialog';
import { InputTextModule } from 'primeng/inputtext';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { complexAnimationSequence } from '../../../shared/animation/complix';

@Component({
  selector: 'app-emp-list',
  standalone: true,
  imports: [ButtonModule, RippleModule, NgClass, NgIf, CardModule, Dialog, AvatarModule, TooltipModule, InputTextModule, ReactiveFormsModule],
  templateUrl: './emp-list.component.html',
  styleUrl: './emp-list.component.scss'
})
export class EmpListComponent implements OnInit, AfterViewInit {
  @ViewChildren('complexDiv') complexDiv!: QueryList<ElementRef>;

  visible: boolean = false;
  form: FormGroup;
  employees: Employee[] = [];

  constructor(
    private EmpService: EmployeesService,
    private ToastService: ToastService,
    private fb: FormBuilder,
    private Router: Router
  ) {
    this.form = this.fb.group({
      FirstName: ['', Validators.required],
      SecondName: ['', Validators.required],
      ThirdName: ['', Validators.required],
      FourthName: ['', Validators.required],
      UserName: ['', Validators.required],
      Email: ['', [Validators.required, Validators.email]],
      PhoneNumber: ['', Validators.required],
    });
  }

  fields = [
    { name: 'FirstName', label: 'First Name', type: 'text' },
    { name: 'SecondName', label: 'Second Name', type: 'text' },
    { name: 'ThirdName', label: 'Third Name', type: 'text' },
    { name: 'FourthName', label: 'Fourth Name', type: 'text' },
    { name: 'UserName', label: 'Username', type: 'text' },
    { name: 'Email', label: 'Email', type: 'email' },
    { name: 'PhoneNumber', label: 'Phone Number', type: 'text' },
  ];

  ngOnInit(): void {
    this.EmpService.GetAllEmployees(1, 10, '').subscribe({
      next: (res) => {
        this.ToastService.success('Employees', 'Employees loaded successfully');
        this.employees = res.data;
      }
    });
  }

  ngAfterViewInit(): void {
    this.complexDiv.changes.subscribe(() => {
      complexAnimationSequence(this.complexDiv, 0.9);
    });
  }

  get f() {
    return this.form.controls;
  }

  deleteEmployee(id: number) {
    this.EmpService.DeleteEmployee(id).subscribe({
      next: (res) => {
        this.ToastService.success('Employees', 'Employee deleted successfully');
        this.employees = this.employees.filter(emp => emp.employeeId !== id);
      },
      error: (err) => {
        this.ToastService.error('Employees', 'Failed to delete employee');
      }
    });
  }

  GetEmployeeDetails(id: number) {
    this.EmpService.GetEmployeeById(id).subscribe({
      next: (res) => {
        this.ToastService.success('Employees', 'Employee details loaded successfully');
        console.log('Employee details:', res);
      },
      error: (err) => {
        this.ToastService.error('Employees', 'Failed to load employee details');
      }
    });
    this.Router.navigate(['/Admin/Employees/employees-Details', id]);
  }

  showDialog() {
    this.visible = true;
  }

  onSubmit() {
    if (this.form.valid) {
      const formData = new FormData();
      for (const key in this.form.value) {
        formData.append(key, this.form.value[key]);
      }

      this.EmpService.AddEmployee(formData).subscribe({
        next: (res) => {
          this.ToastService.success('Employees', res.message);

          this.employees.push(res.data);
          this.visible = false;
          this.form.reset();

        },
        error: (err) => {
          console.error('Error creating Employee:', err);
        }
      });
    } else {
      this.form.markAllAsTouched();
      this.visible = true;
    }
  }

  confirmDelete(item: any) {
    this.EmpService.DeleteEmployee(item).subscribe({
      next: (res) => {
        this.employees = this.employees.filter(b => b.employeeId !== item);
      }
    });
  }
}
