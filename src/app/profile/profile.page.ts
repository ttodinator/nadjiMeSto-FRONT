import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user:User;

  constructor(private accountService:AccountService,private router:Router) {
    this.accountService.currentUser$.pipe(take(1)).subscribe(user=>{
      this.user=user;
    })
   }

  ngOnInit() {
    console.log(this.user);
  }
  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('');
    console.log("radim brt moj")
  }

}
