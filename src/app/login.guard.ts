import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginGuard implements CanActivate {
  constructor(private router: Router) {

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      //StepII:修改邏輯+加入建構式與Router
      //邏輯要加上key=123驗證成功 http://localhost:4200/cards/120?key=123
      if (next.queryParams['key'] === '123') {
        return true;
      } else {
        this.router.navigateByUrl('/login');
        return false;
      }
  }
}
