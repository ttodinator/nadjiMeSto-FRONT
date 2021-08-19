import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurant-reservation-list',
  templateUrl: './restaurant-reservation-list.page.html',
  styleUrls: ['./restaurant-reservation-list.page.scss'],
})
export class RestaurantReservationListPage implements OnInit {

  date:Date;
  constructor() { }

  ngOnInit() {
  }

  findReservation(){
    console.log('aaa');
  }

}
