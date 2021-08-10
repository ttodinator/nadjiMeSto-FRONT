import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RestaurantResolverService } from '../_services/restaurant-resolver.service';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';

import { RestaurantsPage } from './restaurants.page';



const routes: Routes = [
  {
    path: '',
    component: RestaurantsPage
  },


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantsPageRoutingModule {}
