import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantReservationListPage } from './restaurant-reservation-list.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantReservationListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantReservationListPageRoutingModule {}
