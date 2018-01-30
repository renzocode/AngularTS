import { Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(
  	private router : Router,
  	private authService : AuthService) { }

  canActivate(route, state : RouterStateSnapshot) {
  	if (this.authService.isLoggedIn()) return true;
  	this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
  	return false;
  }

}
