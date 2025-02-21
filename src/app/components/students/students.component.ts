import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { BreadcrumbMenuComponent } from '../../shared/components/breadcrumb/breadcrumb.component';
import { LoaderService } from '../../shared/services/loader-service.service';
import { Store } from '@ngrx/store';
import {
  getLayout,
  getLayoutdirection,
  getLayoutmode,
} from '../../shared/store/layout/layout-selector';

@Component({
  selector: 'app-students',
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
  constructor(private loader: LoaderService, private store: Store) {}
  ngOnInit(): void {
    this.store.select(getLayoutmode).subscribe((data) => console.log(data));
    this.store
      .select(getLayoutdirection)
      .subscribe((data) => console.log(data));
    this.store.select(getLayout).subscribe((data) => console.log(data));

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
