import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { restaurant } from '../_models/restaurants';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';
import { RestaurantService } from '../_services/restaurant.service';

@Component({
  selector: 'app-restaurant-reservation',
  templateUrl: './restaurant-reservation.page.html',
  styleUrls: ['./restaurant-reservation.page.scss'],
})
export class RestaurantReservationPage implements OnInit {
  restaurant:restaurant;
  seatingList:number[];
  model:any;
  timeOfTheDay;
  seating;
  date:Date=new Date();
  user:User;
  nesto:string;
  minDate: String = new Date().toISOString();
  maxDate: any = new Date(new Date().setDate(new Date().getDate() + 10)).toISOString();
  
  constructor(private toastController:ToastController, private restaurantService:RestaurantService,private accountService:AccountService) {
      this.accountService.currentUser$.pipe(take(1)).subscribe(response=>{
        this.user=response;
        this.nesto=this.toTitleCase(this.user.username);
        console.log(this.nesto);
        
      })
   }

   async ngOnInit() {
    const toastFalse= await this.toastController.create({
      message: "Doslo je do greske pokusajte ponovo",
      duration: 5000,
      color:"danger"

    });
     this.restaurantService.getRestaurant(this.nesto).subscribe(response=>{
       this.restaurant=response;
       console.log(this.restaurant);
       this.restaurantService.getTables(this.restaurant.restaurantId).subscribe(res=>{
        this.seatingList=res;
        console.log(this.seatingList)
      })
     },error=>{
       toastFalse.present();

     })

  }

   toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }

  async reserve(){
    let x=this.restaurant.restaurantId
    console.log(x);
    this.model=({
      restaurantId:this.restaurant.restaurantId,
      restaurantName:this.restaurant.name,
      timeOfTheDay:this.timeOfTheDay,
      seating:this.seating,
      date:this.date,
    });

    const toastTrue=await this.toastController.create({
      message: "Vasa rezervacija je napravljena",
      duration: 5000,
      color:"success"

    });
    const toastFalse=await this.toastController.create({
      message: "Za izabrane kriterijume nema slobodnih stolova",
      duration: 5000,
      color:"danger"

    });
    console.log(this.model);
    this.restaurantService.reserve(this.model).subscribe(res=>{
      console.log(res);
      
        toastTrue.present();
      
    }, error=>{
      toastFalse.present();
    })
  }

}
