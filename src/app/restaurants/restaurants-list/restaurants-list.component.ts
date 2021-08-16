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
  restaurantsInit:restaurant[]=[]
  restaurantsSearch:restaurant[]=[];
  searchCriteria:string='';
  displayNg: string;


  constructor(private restaurantService:RestaurantService) { }

  ngOnInit() {
    this.restaurantService.getAllRestaurants().subscribe(response=>{
      this.restaurantsInit=response;
      this.restaurants=response;
    })

    //console.log(this.restaurantsInit)

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
