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

  }

}
