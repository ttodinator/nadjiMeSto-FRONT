import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { restaurant } from 'src/app/_models/restaurants';


@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss'],
})
export class RestaurantDetailComponent implements OnInit {

  restaurant:restaurant;

  constructor(private route:ActivatedRoute) { }

  ngOnInit() {
    this.route.data.subscribe(data=>{
      console.log(data);
      this.restaurant=data.restaurant;
    })
  }

}
