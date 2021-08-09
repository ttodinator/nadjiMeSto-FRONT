import { Component, OnInit } from '@angular/core';
import { restaurant } from 'src/app/_models/restaurants';
import { RestaurantService } from 'src/app/_services/restaurant.service';

@Component({
  selector: 'app-restaurants-list',
  templateUrl: './restaurants-list.component.html',
  styleUrls: ['./restaurants-list.component.scss'],
})
export class RestaurantsListComponent implements OnInit {

  restaurants:restaurant[]=[];

  constructor(private restaurantService:RestaurantService) { }

  ngOnInit() {
    this.restaurantService.getAllRestaurants().subscribe(response=>{
      this.restaurants=response;
    })
  }

}
