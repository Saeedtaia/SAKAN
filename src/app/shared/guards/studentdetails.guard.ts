import { CanActivateFn } from '@angular/router';
import { inject } from '@angular/core';
import { Router } from '@angular/router';

export const studentDetailsGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);

  // Get 'StudentId' from route params
  const studentId = route.paramMap.get('StudentId');

  if (Number(studentId)) {
    return true; // Allow navigation
  } else {
    router.navigate(['/Admin/Students/students-details/0']); // Redirect to students-list
    return false; // Block navigation
  }
};
