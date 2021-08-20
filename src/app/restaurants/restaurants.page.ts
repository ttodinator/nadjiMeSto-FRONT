import { Component, OnInit } from '@angular/core';
import { restaurant } from '../_models/restaurants';
import { RestaurantService } from '../_services/restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {

  restaurantsInit:restaurant[];
  restaurants:restaurant[];
  constructor(private restaurantService:RestaurantService) { }

  ngOnInit() {
    this.restaurantService.getAllRestaurants().subscribe(response=>{
      this.restaurantsInit=response;
      this.restaurants=response;
      console.log(this.restaurants)
    })
  }


  search(event:any){
    var query=event.target.value
    if(event.key=='Backspace'){
      this.restaurantsInit=this.restaurants.filter(word=>word.name.indexOf(query)>-1);
    }
    if(query.length<1){
      this.restaurantsInit=this.restaurants;
    }else{
      this.restaurantsInit=this.restaurantsInit.filter(word=>word.name.indexOf(query)>-1);
    }
  }

}
