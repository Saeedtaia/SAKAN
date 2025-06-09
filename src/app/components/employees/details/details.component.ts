import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from '../../../shared/services/EMP/employees.service';
import { Employee } from './../../../shared/interfaces/employee';
import { Component } from '@angular/core';
import { ToastService } from '../../../shared/services/toaster/toast.service';
import { AvatarModule } from 'primeng/avatar';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [AvatarModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})
export class DetailsComponent {
  Employee!: Employee;
  constructor(private EmployeesService: EmployeesService, private Router: ActivatedRoute, private toaster: ToastService) {
    this.EmployeesService.GetEmployeeById(this.Router.snapshot.params['employeeId']).subscribe({
      next: (res) => {
        this.toaster.success("Employee", res.message)
        this.Employee = res.data;
      }
    });
  }
  emailEmployee(email: string) {
    window.location.href = `mailto:${email}?subject=Hello&body=Hi ${email}, I wanted to reach out to you.`;
  }


}
