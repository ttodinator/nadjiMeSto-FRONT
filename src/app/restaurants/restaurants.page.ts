import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../_services/restaurant.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.page.html',
  styleUrls: ['./restaurants.page.scss'],
})
export class RestaurantsPage implements OnInit {

  constructor(private restaurantService:RestaurantService) { }

  ngOnInit() {

  }

}
