// admin.guard.ts
import { CanActivateFn, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode'
import { inject } from '@angular/core';

export const adminGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const token = localStorage.getItem('accessToken');

  if (!token) {
    router.navigate(['/Auth/Sign-In']); // redirect to sign-in page
    return false;
  }

  try {
    const decoded: any = jwtDecode(token);
    const role = decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

    if (role === 'Admin') {
      return true;
    } else {
      router.navigate(['/unauthorized']); // optional page for non-admins
      return false;
    }
  } catch (err) {
    router.navigate(['/sign-in']);
    return false;
  }
};
