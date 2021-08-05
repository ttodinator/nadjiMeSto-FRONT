import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { restaurant } from '../_models/restaurants';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  user:User={
    name:'',
    username:'nadja',
    password:'P@$$w0rd',
    token:'',
    roles:[],
    surname:'',
    cellphoneNumber: '',
    userEmail:'',
    dateOfBirth:new Date
  };

  constructor(private router:Router,private accountService:AccountService) {}

  goTo(){
    //console.log(this.user);
    this.accountService.login(this.user).subscribe(response=>{
      console.log(response);
      this.router.navigateByUrl('/register');
    })
  }


}
