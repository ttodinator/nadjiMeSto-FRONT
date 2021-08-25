import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-user-info-change',
  templateUrl: './user-info-change.page.html',
  styleUrls: ['./user-info-change.page.scss'],
})
export class UserInfoChangePage implements OnInit {

  userChangeForm:FormGroup;
  user:User;
  

  constructor(private toastController:ToastController, private accountService:AccountService,private userService:UserService) {

   }

  ngOnInit() {

    this.initalizeForm();
    
  }
  initalizeForm(){

    

    this.userChangeForm=new FormGroup({
      username:new FormControl('',Validators.required),
      userEmail: new FormControl('',[Validators.required]),
      name: new FormControl('',Validators.required),
      surname: new FormControl('',Validators.required),
      cellphoneNumber:new FormControl('',Validators.required)
      
    });
    this.userService.getUser().subscribe(response=>{
      this.user=response;
      console.log(this.user);
      this.userChangeForm.patchValue({
        name:this.user.name,
        surname:this.user.surname,
        username:this.user.username,
        cellphoneNumber:this.user.cellphoneNumber,
        userEmail:this.user.userEmail,
      })
    })

  }
  userInfoUpdate(){
    console.log("button")
  }

  async updateUser(){
    const toastTrue=await this.toastController.create({
      message: "Profil je uspesno izmenjen",
      duration: 5000,
      color:"success"


    });

    const toastFalse=await this.toastController.create({
      message: "Greska prilikom izmene profila",
      duration: 5000,
      color:"danger"
    });


    this.userService.updateUser(this.userChangeForm.value).subscribe(()=>{
      toastTrue.present();
    },error=>{
      toastFalse.present();
    })
  }

}
