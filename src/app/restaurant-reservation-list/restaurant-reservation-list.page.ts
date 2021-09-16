import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
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
  constructor(private toast:ToastController,private accountService:AccountService,private restaurantService:RestaurantService) {
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
  async findReservation(){  
    
    const toastEmptyList=await this.toast.create({
      message: "Za izabrani datum nema kreiranih rezervacija",
      duration: 5000,
      color: "danger"
    }) 
    const toastError=await this.toast.create({
      message: "Došlo je do greške, izaberite datum i pokusajte ponovo",
      duration: 5000,
      color: "warning"
    }) 

    this.restaurantService.getRestaurant(this.nesto).subscribe(response=>{
      this.restaurant=response;
      var date1=this.date.toString();
      console.log(date1);
      console.log(date1.substr(0,10));
      this.restaurantService.getDailyReservations(this.restaurant.restaurantId,date1.substr(0,10)).subscribe(response=>{
        this.reservationsList=response;
        console.log(this.reservationsList);
        
        if(this.reservationsList.length==0){
          toastEmptyList.present();
        }
      
      },error=>{
        console.log("Doslo je do greske");
        toastError.present();
      })
    })


  
  this.clicked=true;
  }
  

}
