import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm:FormGroup;

  constructor(private accountService:AccountService, private router: Router) { }

  ngOnInit() {
    this.initalizeForm();
  }


  register(){
  this.accountService.register(this.registerForm.value).subscribe(response=>{
    console.log(response);
    this.router.navigateByUrl('/restaurants');


 })
 console.log(this.registerForm.value)
  }
  logout(){
    this.accountService.logout();
    this.router.navigateByUrl('');
    //this.router.navigateByUrl('/restaurants');
  }

  initalizeForm(){
    this.registerForm=new FormGroup({
      username:new FormControl('',Validators.required),
      password:new FormControl('',[Validators.required,Validators.minLength(6)]),
      userEmail: new FormControl('',[Validators.required]),
      name: new FormControl('',Validators.required),
      surname: new FormControl('',Validators.required),
      cellphoneNumber:new FormControl('',Validators.required),
      // passwordCheck:new FormControl('',[Validators.required,Validators.minLength(6)]),
    })
  }

}
