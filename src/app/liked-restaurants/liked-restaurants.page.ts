import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { restaurant } from '../_models/restaurants';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';
import { RestaurantService } from '../_services/restaurant.service';

@Component({
  selector: 'app-liked-restaurants',
  templateUrl: './liked-restaurants.page.html',
  styleUrls: ['./liked-restaurants.page.scss'],
})
export class LikedRestaurantsPage implements OnInit {

  restaurants:restaurant[]=[];
  restaurantsInit:restaurant[]=[]
  searchCriteria:string='';
  displayNg: string;
  user:User;


  constructor(private restaurantService:RestaurantService,private accountService:AccountService) {
    this.accountService.currentUser$.pipe(take(1)).subscribe(res=>{
      this.user=res;
    })
   }

  ngOnInit() {
    this.restaurantService.getAllRestaurants().subscribe(response=>{
      this.restaurantsInit=response;
      this.restaurantsInit.forEach(element => {
        for(let i=0;i<this.user.likes.length;i++){
          if(element.restaurantId==this.user.likes[i]){
            this.restaurants.push(element);
          }
        }
      });
    })
  }



}
