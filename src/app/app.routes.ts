import { Routes } from '@angular/router';
import { AuthComponent } from './layout/auth/auth.component';
import { studentDetailsGuard } from './shared/guards/studentdetails.guard';
import { sTDdetailsResolver } from './shared/resolvers/stddetails.resolver';
import { adminGuard } from './shared/guards/admin.guard';
import { employeeGuard } from './shared/guards/emp.guard';
import { roleGuardFactory } from './shared/guards/role.guard';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'Admin',
    pathMatch: 'full',
  },
  //main layout
  {
    path: 'Admin',
    canActivate: [roleGuardFactory(['Admin', 'Employee'])],
    loadComponent: () =>
      import('./layout/main/main.component').then((m) => m.MainComponent),
    children: [
      {
        path: '',
        redirectTo: 'Home',
        pathMatch: 'full',
      },
      {
        path: 'Issues',
        loadComponent: () =>
          import('./components/Issues/list/list.component').then(
            (m) => m.ListComponent
          ),
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
        //#region dormitories children
        children: [
          {
            path: '',
            redirectTo: 'build-list',
            pathMatch: 'full',
          },
          {
            path: "builds-rooms",
            loadComponent: () => import('./components/dormitories/rooms/rooms.component').then(
              (m) => m.RoomsComponent)
          },
          {
            path: "build-list",
            loadComponent: () => import('./components/dormitories/list/list.component').then(
              (m) => m.ListComponent)
          },
          {
            path: "build-details/:buildId",
            loadComponent: () => import('./components/dormitories/details/details.component').then(
              (m) => m.DetailsComponent)
          }
        ]
        //#endregion
      },
      {
        path: 'Employees',
        loadComponent: () =>
          import('./components/employees/employees.component').then(
            (m) => m.EmployeesComponent
          ),
        //#region employees children
        children: [
          {
            path: '',
            redirectTo: 'employees-list',
            pathMatch: 'full',
          },
          { path: 'employees-list', loadComponent: () => import('./components/employees/emp-list/emp-list.component').then(m => m.EmpListComponent) }
          , {
            path: 'employees-Details/:employeeId',
            loadComponent: () => import('./components/employees/details/details.component').then(m => m.DetailsComponent)
          }
        ],
        //#endregion
      },
      {
        path: 'Settings',
        loadComponent: () =>
          import('./components/settings/settings.component').then(
            (m) => m.SettingsComponent
          ),
        children: [
          {
            path: "", redirectTo: "Registration-period", pathMatch: "full"
          },
          {
            canActivate: [employeeGuard],
            path: "Registration-period",
            loadComponent: () => import('./components/settings/registration-period/registration-period.component').then(
              (m) => m.RegistrationPeriodComponent
            )
          }
        ]
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
            resolve: { StudentDetails: sTDdetailsResolver },
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
          {
            path: 'students-Attendance',
            loadComponent: () =>
              import('./components/students/attendance/attendance.component').then(
                (m) => m.AttendanceComponent
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
    children: [
      { path: "", redirectTo: "Sign-In", pathMatch: "full" },
      { path: "Sign-In", loadComponent: () => import("./components/Auth/login/login.component").then(m => m.LoginComponent) },
    ]
  },
  {
    path: "unauthorized",
    loadComponent: () => import("./components/unauthorized/unauthorized.component").then(m => m.UnauthorizedComponent)
  },
  {
    path: '**',
    loadComponent: () =>
      import('./layout/main/main.component').then((m) => m.MainComponent),
  },
];
