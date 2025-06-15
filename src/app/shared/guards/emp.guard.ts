import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { jwtDecode } from 'jwt-decode';
import { AuthService } from '../services/Auth/auth.service';

export const employeeGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authService = inject(AuthService);

  const token = authService.getAccessToken();

  if (!token) {
    router.navigate(['/Auth/Sign-In']);
    return false;
  }

  try {
    const decoded: any = jwtDecode(token);
    const role = decoded["http://schemas.microsoft.com/ws/2008/06/identity/claims/role"];

    if (role === 'Employee') {
      return true;
    } else {
      router.navigate(['/unauthorized']); // Optional: redirect non-employees
      return false;
    }
  } catch (err) {
    router.navigate(['/Auth/Sign-In']);
    return false;
  }
};
