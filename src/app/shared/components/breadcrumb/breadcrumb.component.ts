import { MatButtonModule } from '@angular/material/button';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { Breadcrumb } from 'primeng/breadcrumb';
import { filter } from 'rxjs';

@Component({
  selector: 'app-breadcrumb-menu',
  standalone: true,
  imports: [Breadcrumb, MatButtonModule],
  templateUrl: './breadcrumb.component.html',
  styleUrl: './breadcrumb.component.scss',
})
export class BreadcrumbMenuComponent implements OnInit {
  menuitems: MenuItem[] = [];
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit(): void {
    this.updateBreadcrumb();
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateBreadcrumb();
      });
  }

  private updateBreadcrumb() {
    this.menuitems = [{ label: 'Students', routerLink: '/Admin/Students/' }];

    let currentRoute = this.activatedRoute.root;
    let url = '/Admin/';

    while (currentRoute.firstChild) {
      currentRoute = currentRoute.firstChild;
      if (currentRoute.snapshot.url.length) {
        const pathSegment = currentRoute.snapshot.url[0].path;

        if (!this.isValidSegment(pathSegment)) {
          continue;
        }

        url += `/${pathSegment}`;
        const label = this.getRouteLabel(pathSegment);

        if (label !== 'Unknown') {
          const isLastItem = !currentRoute.firstChild;

          this.menuitems.push({
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
