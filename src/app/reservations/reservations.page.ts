import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { Reservation } from '../_models/reservation';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';
import { RestaurantService } from '../_services/restaurant.service';

@Component({
  selector: 'app-reservations',
  templateUrl: './reservations.page.html',
  styleUrls: ['./reservations.page.scss'],
})
export class ReservationsPage implements OnInit {
   reservationsList:Reservation[]=[];
   user: User;
  constructor(private restaurantService:RestaurantService, accountService:AccountService) { 
    accountService.currentUser$.pipe(take(1)).subscribe(x=>{
      this.user=x;
      console.log(this.user)
    })
  }

  ngOnInit() {
    
    this.restaurantService.getAllReservations().subscribe(res=>{
      this.reservationsList=res;
      console.log(this.reservationsList)
    })

  }

  doRefresh(event) {
    this.restaurantService.getAllReservations().subscribe(res=>{
      this.reservationsList=res;
      console.log(this.reservationsList)
    })

    setTimeout(() => {
      event.target.complete();
    }, 2000);
  }

}
