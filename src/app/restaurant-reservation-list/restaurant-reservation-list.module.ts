import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantReservationListPageRoutingModule } from './restaurant-reservation-list-routing.module';

import { RestaurantReservationListPage } from './restaurant-reservation-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantReservationListPageRoutingModule
  ],
  declarations: [RestaurantReservationListPage]
})
export class RestaurantReservationListPageModule {}
