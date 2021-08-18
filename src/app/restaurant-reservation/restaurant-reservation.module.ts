import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantReservationPageRoutingModule } from './restaurant-reservation-routing.module';

import { RestaurantReservationPage } from './restaurant-reservation.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantReservationPageRoutingModule
  ],
  declarations: [RestaurantReservationPage]
})
export class RestaurantReservationPageModule {}
