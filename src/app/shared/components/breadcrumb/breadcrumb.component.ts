import { MatButtonModule } from '@angular/material/button';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Breadcrumb } from 'primeng/breadcrumb';
import { filter } from 'rxjs';
import {FAKE_STUDENTS} from '../../samples/student/mock-students';

import { Student } from '../../../shared/data/student/student';

@Component({
  selector: 'app-breadcrumb-menu',
  imports: [Breadcrumb, MatButtonModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss'
})
export class BreadcrumbMenuComponent implements OnInit {
  menuitem: MenuItem[] = [];
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };
  students: Student[] = [];
  filterdStudent!: Student|undefined;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {

    this.students = [...FAKE_STUDENTS];
    this.updateBreadcrumb();
    this.router.events
        .pipe(filter((event) => event instanceof NavigationEnd))
        .subscribe(() => {
          this.updateBreadcrumb();
        });
  }

  private updateBreadcrumb() {
    this.menuitem = [{ label: 'Students', routerLink: '/Admin/Students/' }];

    let currentRoute = this.activatedRoute.root;
    let url = '/Admin/';
    let studentId: string | null ; // Store student ID

    while (currentRoute.firstChild) {
      currentRoute = currentRoute.firstChild;
      if (currentRoute.snapshot.url.length) {
        const pathSegment = currentRoute.snapshot.url[0].path;

        if (!this.isValidSegment(pathSegment)) {
          continue;
        }

        url += `/${pathSegment}`;
        let label = this.getRouteLabel(pathSegment);

        // If on "student-details", append student ID
        if (pathSegment === 'student-details') {
          studentId = currentRoute.snapshot.paramMap.get('StudentId');
          this.filterdStudent = this.students.find(student =>
              student.nationalID.toString() === studentId
          );


          if (studentId) {
            label = `Student Details - ${this.filterdStudent?.firstName}  ${this.filterdStudent?.secondName} ${this.filterdStudent?.thirdName} ${this.filterdStudent?.fourthName}`; // Update label format
            url += `/${studentId}`;
          }
        }

        if (label !== 'Unknown') {
          const isLastItem = !currentRoute.firstChild;
          this.menuitem.push({
            label,
            routerLink: isLastItem ? url : null,
          });
        }
      }
    }
  }

  private getRouteLabel(route: string): string {
    const labels: { [key: string]: string } = {
      'students-list': 'Students List',
      'students-Applications': 'Applications',
      'students-Data': 'Student Data',
      'students-Tickets': 'Tickets',
      'students-Messages': 'Messages',
      'student-details': 'Student Details',
      Events: 'Events',
    };

    return labels[route] || 'Unknown';
  }

  private isValidSegment(segment: string): boolean {
    const ignoredSegments = ['Admin_Student_hotel', 'Admin'];
    return !ignoredSegments.includes(segment);
  }
}
