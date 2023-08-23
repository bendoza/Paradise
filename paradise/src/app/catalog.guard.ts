import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CatalogGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    const hasEnteredPassword = sessionStorage.getItem('passwordEntered') === 'true';

    if (!hasEnteredPassword) {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
}
