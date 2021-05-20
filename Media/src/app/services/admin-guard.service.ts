import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService implements CanActivate{

  constructor() { }

  canActivate(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    return true;
  }
}
