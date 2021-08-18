import { UpperCasePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
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
  model:any;
  timeOfTheDay;
  seating;
  date:Date=new Date();
  user:User;
  nesto:string;
  minDate: String = new Date().toISOString();
  maxDate: any = new Date(new Date().setDate(new Date().getDate() + 10)).toISOString();
  constructor(private restaurantService:RestaurantService,private accountService:AccountService) {
      this.accountService.currentUser$.pipe(take(1)).subscribe(response=>{
        this.user=response;
        this.nesto=this.toTitleCase(this.user.username);
        console.log(this.nesto);
        
      })
   }

  ngOnInit() {
     this.restaurantService.getRestaurant(this.nesto).subscribe(response=>{
       this.restaurant=response;
       console.log(this.restaurant);
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

}
