import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-info-change',
  templateUrl: './user-info-change.page.html',
  styleUrls: ['./user-info-change.page.scss'],
})
export class UserInfoChangePage implements OnInit {

  userChangeForm:FormGroup;

  constructor() { }

  ngOnInit() {
    this.initalizeForm();
  }
  initalizeForm(){
    this.userChangeForm=new FormGroup({
      username:new FormControl('',Validators.required),
      password:new FormControl('',[Validators.required,Validators.minLength(6)]),
      userEmail: new FormControl('',[Validators.required]),
      name: new FormControl('',Validators.required),
      surname: new FormControl('',Validators.required),
      cellphoneNumber:new FormControl('',Validators.required),
      
    })
  }
  userInfoUpdate(){
    console.log("button")
  }

}
