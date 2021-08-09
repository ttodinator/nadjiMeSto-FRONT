import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private accountService:AccountService, private router: Router) { }

  ngOnInit() {
  }

  user:User = {
    username: '',
    name: '',
    roles:[],
    cellphoneNumber:'',
    dateOfBirth:new Date,
    password:'',
    surname:'',
    userEmail:'',
    token:''


  };
  register(){
  this.accountService.register(this.user).subscribe(response=>{
    console.log(response);
  })
  

  }
  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('');
    //this.router.navigateByUrl('/restaurants');
  }
}
