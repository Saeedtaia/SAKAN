import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const studentDetailsGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // Get 'StudentId' from route params
  const studentId = route.paramMap.get('StudentId');

  if (studentId) {
    return true; // Allow navigation
  } else {
    router.navigate(['/']); // Redirect to home or another page
    return false; // Block navigation
  }
};
