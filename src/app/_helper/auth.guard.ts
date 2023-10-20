import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../_services/auth.service';
import { inject } from '@angular/core';
import { SocialUser } from '@abacritt/angularx-social-login';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const authService = inject(AuthService);


  if (authService.isLogged()) {
    return true;
  } else {
    return authService.currentUserValue?.user instanceof SocialUser
      ? authService.currentUserValue?.user ? true : inject(Router).createUrlTree(['/user/connectedUser'])
      : inject(Router).createUrlTree(['auth']);
  }
};

