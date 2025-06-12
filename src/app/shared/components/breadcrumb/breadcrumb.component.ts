import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { Breadcrumb } from 'primeng/breadcrumb';
import { MenuItem } from 'primeng/api';
import { filter } from 'rxjs';
import { FAKE_STUDENTS } from '../../samples/student/mock-students';
import { Student } from '../../../shared/data/student/student';
import { TranslocoService } from '@ngneat/transloco';

@Component({
  selector: 'app-breadcrumb-menu',
  standalone: true,
  imports: [Breadcrumb, MatButtonModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbMenuComponent implements OnInit {
  menuitem: MenuItem[] = [];
  home: MenuItem = { icon: 'pi pi-home', label: '', routerLink: '/' };
  students: Student[] = [];
  filterdStudent!: Student | undefined;
  currentLang: 'en' | 'ar' = 'en';

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private translocoService: TranslocoService,
  ) { }

  ngOnInit(): void {
    this.students = [...FAKE_STUDENTS];
    this.currentLang = this.translocoService.getActiveLang() as 'en' | 'ar';
    this.updateBreadcrumb();

    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateBreadcrumb();
      });

    this.translocoService.langChanges$.subscribe((lang) => {
      this.currentLang = lang as 'en' | 'ar';
      this.updateBreadcrumb();
    });
  }

  private updateBreadcrumb() {
    this.menuitem = [];

    let currentRoute = this.activatedRoute.root;
    let url = '';

    while (currentRoute.firstChild) {
      currentRoute = currentRoute.firstChild;

      if (currentRoute.snapshot.url.length) {
        const pathSegment = currentRoute.snapshot.url[0].path;

        url += `/${pathSegment}`;
        if (!this.isValidSegment(pathSegment)) continue;

        let label = this.getLabel(pathSegment);
        let routerLink = url;

        if (pathSegment === 'student-details') {
          const studentId = currentRoute.snapshot.paramMap.get('StudentId');
          if (studentId) {
            this.filterdStudent = this.students.find(
              (student) => student.nationalID.toString() === studentId
            );

            if (this.filterdStudent) {
              const nameParts = [
                this.filterdStudent.firstName,
                this.filterdStudent.secondName,
                this.filterdStudent.thirdName,
                this.filterdStudent.fourthName,
              ];
              label = `${this.getLabel('student-details')} - ${nameParts.join(' ')}`;
              url += `/${studentId}`;
            }
          }
        }

        if (pathSegment === 'build-details') {
          const buildId = currentRoute.snapshot.paramMap.get('buildId');

          if (buildId) {
            label = `${this.getLabel('build-details')} - ${buildId}`;
            url += `/${buildId}`;
          }
        }
        if (pathSegment === 'employees-Details') {
          const empId = currentRoute.snapshot.paramMap.get('employeeId');
          if (empId) {
            label = `${this.getLabel('employees-Details')} - ${empId}`;
            url += `/${empId}`;
          }
        }

        // ✅ Custom routerLink for Dormitories
        if (pathSegment === 'Dormitories') {
          routerLink = '/Admin/Dormitories/build-list';
        }

        if (label !== 'Unknown' && label !== 'غير معروف') {
          const isLast = !currentRoute.firstChild;
          this.menuitem.push({
            label,
            routerLink: isLast ? null : routerLink,
          });
        }
      }
    }
  }

  private getLabel(route: string): string {
    const labels: { [key: string]: { en: string; ar: string } } = {
      'employees-Details': { en: `Employee Details`, ar: 'تفاصيل الموظف' },
      'build-details': { en: 'Building Details Number', ar: 'تفاصيل المبنى رقم' },
      Auth: { en: 'Auth', ar: 'المصادقة' },
      'Auth-Login': { en: 'Login', ar: 'تسجيل الدخول' },
      'build-list': { en: 'Dormitory List', ar: 'قائمة السكنات' },
      Home: { en: 'Home', ar: 'الرئيسية' },
      Dormitories: { en: 'Dormitories', ar: 'السكنات' },
      Employees: { en: 'Employees', ar: 'الموظفين' },
      'employees-list': { en: 'Employees List', ar: 'قائمة الموظفين' },
      Students: { en: 'Students', ar: 'الطلاب' },
      'students-list': { en: 'Students List', ar: 'قائمة الطلاب' },
      'students-Applications': { en: 'Applications', ar: 'الطلبات' },
      'students-Data': { en: 'Student Data', ar: 'بيانات الطالب' },
      'students-Tickets': { en: 'Tickets', ar: 'التذاكر' },
      'students-Messages': { en: 'Messages', ar: 'الرسائل' },
      'student-details': { en: 'Student Details', ar: 'تفاصيل الطالب' },
      Events: { en: 'Events', ar: 'الفعاليات' },
      Settings: { en: 'Settings', ar: 'الإعدادات' },
    };

    const translation = labels[route];
    if (!translation) {
      return this.currentLang === 'ar' ? 'غير معروف' : 'Unknown';
    }
    return this.currentLang === 'ar' ? translation.ar : translation.en;
  }

  private isValidSegment(segment: string): boolean {
    const ignoredSegments = ['Admin', 'Auth'];
    return !ignoredSegments.includes(segment);
  }
}
