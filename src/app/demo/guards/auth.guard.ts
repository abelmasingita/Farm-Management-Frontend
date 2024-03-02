import {
    ActivatedRouteSnapshot,
    CanActivateFn,
    Router,
    RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../service/auth.service';
import { inject } from '@angular/core';

export const AuthGuard: CanActivateFn = () => {
    const authService: AuthService = inject(AuthService);
    const router: Router = inject(Router);

    if (authService.isAuthenticated()) {
        return true;
    }
    return router.createUrlTree(['/auth/access']);
};
