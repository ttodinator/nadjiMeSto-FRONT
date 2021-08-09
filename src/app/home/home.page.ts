import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { restaurant } from '../_models/restaurants';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  loginForm:FormGroup;

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

  constructor(private router:Router,private accountService:AccountService) {

  }
  
  ngOnInit(): void {
    this.initializeForm();
  }

  initializeForm(){
    this.loginForm=new FormGroup({
      username:new FormControl('',Validators.required),
      password:new FormControl('',[Validators.required,Validators.minLength(6)])
    })
  }


  goTo(){
    //console.log(this.loginForm.valid);
    this.accountService.login(this.loginForm.value).subscribe(response=>{
      this.router.navigateByUrl('/register');
    })
  }


}
