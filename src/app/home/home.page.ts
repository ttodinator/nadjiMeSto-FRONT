import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ToastController } from '@ionic/angular';
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
  clicked:boolean=false;
  


  constructor(private toast:ToastController,private router:Router,private accountService:AccountService) {

  }
  
  ngOnInit(): void {
    this.initializeForm();
    console.log(this.loginForm.get("username").touched);

  }

  initializeForm(){
    this.loginForm=new FormGroup({
      username:new FormControl('',[Validators.required,Validators.minLength(3)]),
      password:new FormControl('',[Validators.required,Validators.minLength(6)])
    })
  }


   async goTo(){
    const toastFalse= await this.toast.create({
      message: "Neuspesno logovanje",
      duration: 5000,
      color: "danger"
  
    });
    //console.log(this.loginForm.valid);
    this.accountService.login(this.loginForm.value).subscribe(response=>{
      this.router.navigateByUrl('/restaurants');
    }, error=>{
      toastFalse.present();
    
    });
    
  }
  clickOn(){
    this.clicked=true;
  }


}
