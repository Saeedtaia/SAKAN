import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-unauthorized',
  standalone: true,
  imports: [],
  templateUrl: './unauthorized.component.html',
  styleUrl: './unauthorized.component.scss'
})
export class UnauthorizedComponent {
  constructor(private router: Router) { }

  goHome() {
    this.router.navigate(['/Admin/Home']);
  }

  logout() {
    // Perform logout logic if needed
    this.router.navigate(['/Auth/Sign-In']);
  }
}
