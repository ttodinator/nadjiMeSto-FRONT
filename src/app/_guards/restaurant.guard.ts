import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { ToastController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AccountService } from '../_services/account.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantGuard implements CanActivate {
  constructor(private toast:ToastController,private accountService:AccountService) {
  
  
  }
  
    canActivate(): Observable<boolean> {
      return this.accountService.currentUser$.pipe(
        map(user=>{
          if(user.roles.includes('Restaurant') ){
            return true;
          }
          this.toastActivation();
        })
      )
    }
    async toastActivation(){
      const toastFalse= await this.toast.create({
        message: "Pristup dozvoljen iskljucivo restoranima!",
        duration: 5000,
        color: "danger"
    
      });
      toastFalse.present();
    }
  
}
