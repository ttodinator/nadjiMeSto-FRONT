import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { take } from 'rxjs/operators';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-user-info-change',
  templateUrl: './user-info-change.page.html',
  styleUrls: ['./user-info-change.page.scss'],
})
export class UserInfoChangePage implements OnInit {

  userChangeForm:FormGroup;
  user:User;

  constructor(private accountService:AccountService) {
    this.accountService.currentUser$.pipe(take(1)).subscribe(user=>{
      this.user=user;
    })
   }

  ngOnInit() {
    this.initalizeForm();
    console.log(this.user);
  }
  initalizeForm(){
    this.userChangeForm=new FormGroup({
      username:new FormControl('',Validators.required),
      password:new FormControl('',[Validators.required,Validators.minLength(6)]),
      userEmail: new FormControl('',[Validators.required]),
      name: new FormControl('',Validators.required),
      surname: new FormControl('',Validators.required),
      cellphoneNumber:new FormControl('',Validators.required)
      
    });

    this.userChangeForm.patchValue({
      name:this.user.name,
      surname:this.user.surname,
      username:this.user.username,
      cellphoneNumber:this.user.cellphoneNumber,
      userEmail:this.user.userEmail,
      password:this.user.password,
    })
  }
  userInfoUpdate(){
    console.log("button")
  }

}
