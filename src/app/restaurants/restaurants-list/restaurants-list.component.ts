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
  display: string;


  constructor(private restaurantService:RestaurantService) { }

  ngOnInit() {
    this.restaurantService.getAllRestaurants().subscribe(response=>{
      this.restaurantsInit=response;
      this.restaurants=response;
    })
  }

  search(event:any){
    var query=event.target.value
    this.restaurantsInit.forEach(item=>{
      //item.name.startsWith(query)?console.log('a'):this.display='none';
      var shouldShow = item.name.toLowerCase().indexOf(query) > -1;
      this.display = shouldShow ? 'block' : 'none';
    })
    // if(event.key=='Backspace'){
    //   this.restaurantsInit=this.restaurants
    //   this.searchCriteria= this.searchCriteria.substring(0, this.searchCriteria.length-1);
    //   //console.log(this.searchCriteria);
    //   this.restaurantsInit=this.restaurantsInit.filter(word=>word.name.startsWith(this.searchCriteria));
    // }else{
    //   this.searchCriteria=this.searchCriteria+event.key;
    //   //console.log(this.searchCriteria);
    // }
    // if(this.searchCriteria.length<1){
    //   this.restaurantsInit=this.restaurants;
    // }else{
    //   this.restaurantsInit=this.restaurantsInit.filter(word=>word.name.startsWith(this.searchCriteria));
    // }
  }




}
