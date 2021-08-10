import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { restaurant } from 'src/app/_models/restaurants';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss'],
})
export class RestaurantCardComponent implements OnInit {

  @Input() restaurant:restaurant;
  constructor(private router:Router) { }

  ngOnInit() {}


  kl(){
    this.router.navigateByUrl('restaurants/'+this.restaurant.name);
  }
  
}
