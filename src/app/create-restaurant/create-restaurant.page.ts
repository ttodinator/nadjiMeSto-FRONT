import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';
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

  constructor(private restaurantService:RestaurantService) { }

  ngOnInit() {
    this.initalizeForm();
  }

  initalizeForm(){
    this.restaurantForm=new FormGroup({
      
      password:new FormControl('',[Validators.required,Validators.minLength(6)]),
     
      name: new FormControl('',Validators.required),
      adress: new FormControl('',Validators.required),
      phoneNumber:new FormControl('',Validators.required),
      seatingFor2:new FormControl('',),
      seatingFor4:new FormControl('',),
      seatingFor6:new FormControl('',),
      seatingFor8:new FormControl('',),
      seatingFor10:new FormControl('',),
      seatingFor12:new FormControl('',),
     
    })
  }

  create(){
    console.log(this.restaurantForm.value);
    this.restaurantService.createRestaurant(this.restaurantForm.value).subscribe(()=>{
      console.log('Ok');
    })
  }

}
