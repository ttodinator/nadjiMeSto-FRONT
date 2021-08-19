import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Reservation } from '../_models/reservation';
import { restaurant } from '../_models/restaurants';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';
import { RestaurantService } from '../_services/restaurant.service';

@Component({
  selector: 'app-restaurant-reservation-list',
  templateUrl: './restaurant-reservation-list.page.html',
  styleUrls: ['./restaurant-reservation-list.page.scss'],
})
export class RestaurantReservationListPage implements OnInit {

  reservationsList:Reservation[]=[];
  restaurant: restaurant;
  user:User;
  nesto:string;
  clicked: boolean=false;
  
 date:Date=new Date();
  constructor(private accountService:AccountService,private restaurantService:RestaurantService) {
    this.accountService.currentUser$.pipe(take(1)).subscribe(response=>{
      this.user=response;
      this.nesto=this.toTitleCase(this.user.username);
      console.log(this.nesto);
      
    })

   }

  ngOnInit() {


  }
  toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }
//treba nam id od restorana i datum koji prosledjujemo metodi
  findReservation(){    

  this.restaurantService.getDailyReservations(1,this.date).subscribe(response=>{
    this.reservationsList=response;
    console.log(this.reservationsList);
  })
  this.clicked=true;
  }
  

}
