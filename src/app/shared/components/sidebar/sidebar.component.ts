import { NgClass } from '@angular/common';
import { Component, input, output, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconModule } from '@angular/material/icon';
import { OverlayBadgeModule } from 'primeng/overlaybadge';
import { BadgeModule } from 'primeng/badge';
import { LanguageSwitcherComponent } from '../langswitcher/langswitcher.component';
import { AuthService } from '../../services/Auth/auth.service';
@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLinkActive,
    RouterLink,
    NgClass,
    MatTooltipModule,
    MatIconModule,
    OverlayBadgeModule,
    BadgeModule,
    LanguageSwitcherComponent,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  isLeftSidebarCollapsed = input.required<boolean>();
  changeIsLeftSidebarCollapsed = output<boolean>();
  constructor(private AuthService: AuthService, private Router: Router) { }
  items: {
    routeLink: string;
    icon: string;
    label: string;
    overlaybadge: string;
  }[] = [
      {
        routeLink: 'Home',
        icon: 'fal fa-home',
        label: 'Dashboard',
        overlaybadge: 'false',
      },
      {
        routeLink: 'Students',
        icon: 'fal fa-users',
        label: 'Students',
        overlaybadge: 'false',
      },
      {
        routeLink: 'Employees',
        icon: 'fal fa-user-tie',
        label: 'Employees',
        overlaybadge: 'false',
      },
      {
        routeLink: 'Dormitories',
        icon: 'fal fa-door-open',
        label: 'Dormitories',
        overlaybadge: 'false',
      },

      {
        routeLink: 'Issues',
        icon: 'fal fa-exclamation-circle',
        label: 'Issues',
        overlaybadge: 'true',
      },
      {
        routeLink: 'Settings',
        icon: 'fal fa-cog',
        label: 'Settings',
        overlaybadge: 'false',
      },
    ];

  toggleCollapse(): void {
    this.changeIsLeftSidebarCollapsed.emit(!this.isLeftSidebarCollapsed());
  }

  closeSidenav(): void {
    this.changeIsLeftSidebarCollapsed.emit(true);
  }
  logout() {
    this.AuthService.logout(); // or however you handle logout
  }
}
