import { MatButtonModule } from '@angular/material/button';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Breadcrumb } from 'primeng/breadcrumb';
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
    private translocoService: TranslocoService
  ) {}

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
    this.menuitem = [
      {
        label: this.currentLang === 'ar' ? 'الطلاب' : 'Students',
        routerLink: '/Admin/Students/',
      },
    ];

    let currentRoute = this.activatedRoute.root;
    let url = '/Admin/';
    let studentId: string | null;

    while (currentRoute.firstChild) {
      currentRoute = currentRoute.firstChild;
      if (currentRoute.snapshot.url.length) {
        const pathSegment = currentRoute.snapshot.url[0].path;

        if (!this.isValidSegment(pathSegment)) {
          continue;
        }

        url += `/${pathSegment}`;
        let label = this.getLabel(pathSegment);

        if (pathSegment === 'student-details') {
          studentId = currentRoute.snapshot.paramMap.get('StudentId');
          this.filterdStudent = this.students.find(
            (student) => student.nationalID.toString() === studentId
          );

          if (studentId && this.filterdStudent) {
            const nameParts =
              this.currentLang === 'ar'
                ? [
                    this.filterdStudent.firstName,
                    this.filterdStudent.secondName,
                    this.filterdStudent.thirdName,
                    this.filterdStudent.fourthName,
                  ]
                : [
                    this.filterdStudent.firstName,
                    this.filterdStudent.secondName,
                    this.filterdStudent.thirdName,
                    this.filterdStudent.fourthName,
                  ];

            label = `${this.getLabel('student-details')} - ${nameParts.join(
              ' '
            )}`;
            url += `/${studentId}`;
          }
        }

        if (label !== 'Unknown' && label !== 'غير معروف') {
          const isLastItem = !currentRoute.firstChild;
          this.menuitem.push({
            label,
            routerLink: isLastItem ? url : null,
          });
        }
      }
    }
  }

  private getLabel(route: string): string {
    const labels: { [key: string]: { en: string; ar: string } } = {
      'students-list': { en: 'Students List', ar: 'قائمة الطلاب' },
      'students-Applications': { en: 'Applications', ar: 'الطلبات' },
      'students-Data': { en: 'Student Data', ar: 'بيانات الطالب' },
      'students-Tickets': { en: 'Tickets', ar: 'التذاكر' },
      'students-Messages': { en: 'Messages', ar: 'الرسائل' },
      'student-details': { en: 'Student Details', ar: 'تفاصيل الطالب' },
      Events: { en: 'Events', ar: 'الفعاليات' },
    };

    const translation = labels[route];
    if (!translation) {
      return this.currentLang === 'ar' ? 'غير معروف' : 'Unknown';
    }
    return this.currentLang === 'ar' ? translation.ar : translation.en;
  }

  private isValidSegment(segment: string): boolean {
    const ignoredSegments = ['Admin_Student_hotel', 'Admin'];
    return !ignoredSegments.includes(segment);
  }
}
