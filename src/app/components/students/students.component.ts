import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BreadcrumbMenuComponent } from '../../shared/components/breadcrumb/breadcrumb.component';
import { LoaderService } from '../../shared/services/loader-service.service';

@Component({
  selector: 'app-students',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    MatButtonModule,
    MatMenuModule,
    MatIconModule,
    BreadcrumbMenuComponent,
  ],
  templateUrl: './students.component.html',
  styleUrl: './students.component.scss',
})
export class StudentsComponent implements OnInit {
  constructor(private loader: LoaderService) {}
  ngOnInit(): void {
    // this.loader.show();
  }
  items = [
    {
      routeLink: 'students-list',
      icon: 'list',
      label: 'Students List',
    },
    {
      routeLink: 'students-Applications',
      icon: 'assignment',
      label: 'Students Applications',
    },
    {
      routeLink: 'students-Messages',
      icon: 'messages',
      label: 'Students Messages',
    },
    {
      routeLink: 'Events',
      icon: 'event',
      label: 'Students Events',
    },
  ];
}
