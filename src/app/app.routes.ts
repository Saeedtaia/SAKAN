import { Routes } from '@angular/router';
import { AuthComponent } from './layout/auth/auth.component';
import { studentDetailsGuard } from './shared/guards/studentdetails.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'Admin',
    pathMatch: 'full',
  },
  //main layout
  {
    path: 'Admin',
    // canActivate: [],
    loadComponent: () =>
      import('./layout/main/main.component').then((m) => m.MainComponent),
    children: [
      {
        path: '',
        redirectTo: 'Home',
        pathMatch: 'full',
      },
      {
        path: 'Home',
        loadComponent: () =>
          import('./components/home/home.component').then(
            (m) => m.HomeComponent
          ),
      },
      {
        path: 'Dormitories',
        loadComponent: () =>
          import('./components/dormitories/dormitories.component').then(
            (m) => m.DormitoriesComponent
          ),
      },
      {
        path: 'Employees',
        loadComponent: () =>
          import('./components/employees/employees.component').then(
            (m) => m.EmployeesComponent
          ),
      },
      {
        path: 'Settings',
        loadComponent: () =>
          import('./components/settings/settings.component').then(
            (m) => m.SettingsComponent
          ),
      },
      {
        path: 'Students',
        loadComponent: () =>
          import('./components/students/students.component').then(
            (m) => m.StudentsComponent
          ),
        //#region students children
        children: [
          {
            path: '',
            redirectTo: 'students-list',
            pathMatch: 'full',
          },
          {
            path: 'Events',
            loadComponent: () =>
              import('./components/students/events/events.component').then(
                (m) => m.EventsComponent
              ),
          },
          {
            canActivate: [studentDetailsGuard],
            path: 'student-details/:StudentId',
            loadComponent: () =>
              import(
                './components/students/student-details/student-details.component'
              ).then((m) => m.StudentDetailsComponent),
          },
          {
            path: 'students-list',
            loadComponent: () =>
              import(
                './components/students/students-list/students-list.component'
              ).then((m) => m.StudentsListComponent),
            children: [],
          },
          {
            path: 'students-Applications',
            loadComponent: () =>
              import(
                './components/students/applications/applications.component'
              ).then((m) => m.ApplicationsComponent),
          },
          {
            path: 'students-Messages',
            loadComponent: () =>
              import('./components/students/messages/messages.component').then(
                (m) => m.MessagesComponent
              ),
          },
        ],
        //#endregion
      },
    ],
  },

  //auth layout
  {
    path: 'Auth',
    loadComponent: () =>
      import('./layout/auth/auth.component').then((m) => m.AuthComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./layout/main/main.component').then((m) => m.MainComponent),
  },
];
