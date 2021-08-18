import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantReservationPage } from './restaurant-reservation.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantReservationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantReservationPageRoutingModule {}
