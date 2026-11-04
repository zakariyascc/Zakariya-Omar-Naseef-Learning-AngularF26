import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { inject } from '@angular/core';
import { GuardService } from './services/guard';

export const editGuard: CanActivateFn = (): boolean | UrlTree => {
  const guardService = inject(GuardService);
  const router = inject(Router);

  if (guardService.guardEnabled()) {
    return router.createUrlTree(['/weather'])
  }

  return true;
};
