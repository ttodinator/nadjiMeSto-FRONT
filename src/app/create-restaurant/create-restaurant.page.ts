import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { RestaurantService } from '../_services/restaurant.service';

@Component({
  selector: 'app-create-restaurant',
  templateUrl: './create-restaurant.page.html',
  styleUrls: ['./create-restaurant.page.scss'],
})
export class CreateRestaurantPage implements OnInit {

  min:number=0;
  max:number=100;

  restaurantForm:FormGroup;

  constructor(private toast:ToastController,private restaurantService:RestaurantService) { }

  ngOnInit() {
    this.initalizeForm();
  }

  initalizeForm(){
    this.restaurantForm=new FormGroup({
      
      password:new FormControl('',[Validators.required,Validators.minLength(6)]),
     
      name: new FormControl('',Validators.required),
      adress: new FormControl('',Validators.required),
      phoneNumber:new FormControl('',Validators.required),
      seatingFor2:new FormControl('',[Validators.required,Validators.min(0),Validators.max(20)]),
      seatingFor4:new FormControl('',[Validators.required,Validators.min(0),Validators.max(20)]),
      seatingFor6:new FormControl('',[Validators.required,Validators.min(0),Validators.max(20)]),
      seatingFor8:new FormControl('',[Validators.required,Validators.min(0),Validators.max(20)]),
      seatingFor10:new FormControl('',[Validators.required,Validators.min(0),Validators.max(20)]),
      seatingFor12:new FormControl('',[Validators.required,Validators.min(0),Validators.max(20)]),
      description:new FormControl('',Validators.required)
     
    })
  }

  async create(){
    const toastFalse= await this.toast.create({
      message: "Neuspesno kreiranje, proverite podatke",
      duration: 3000,
      color: "danger"
  
    });
    const toastTrue= await this.toast.create({
      message: "Restoran kreiran!",
      duration: 3000,
      color: "success"
  
    });
    console.log(this.restaurantForm.value);
    this.restaurantService.createRestaurant(this.restaurantForm.value).subscribe(()=>{
      toastTrue.present();
      console.log('Ok');
    },error=>{
      toastFalse.present()
    })
    
  }

}
