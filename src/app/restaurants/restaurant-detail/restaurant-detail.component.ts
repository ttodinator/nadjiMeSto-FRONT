import { Component, Input, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { restaurant } from 'src/app/_models/restaurants';


@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss'],
})
export class RestaurantDetailComponent implements OnInit {

  @Input() restaurant:restaurant;

  constructor() { }

  ngOnInit() {}

}
