import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountService } from '../_services/account.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private accountService:AccountService) {
  
  
  }
  
    canActivate(): Observable<boolean> {
      return this.accountService.currentUser$.pipe(
        map(user=>{
          if(user.roles.includes('Admin') ){
            return true;
          }
          console.log("You cannot enter this area");
        })
      )
    }
  
}
