import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-restaurant',
  templateUrl: './create-restaurant.page.html',
  styleUrls: ['./create-restaurant.page.scss'],
})
export class CreateRestaurantPage implements OnInit {

  restaurantForm:FormGroup;

  constructor() { }

  ngOnInit() {
    this.initalizeForm();
  }

  initalizeForm(){
    this.restaurantForm=new FormGroup({
      
      password:new FormControl('',[Validators.required,Validators.minLength(6)]),
     
      name: new FormControl('',Validators.required),
      adress: new FormControl('',Validators.required),
      phoneNumber:new FormControl('',Validators.required),
     
    })
  }

  create(){
    console.log("radimmmm")
  }

}
