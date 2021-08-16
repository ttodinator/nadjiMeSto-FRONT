import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LikedRestaurantsPage } from './liked-restaurants.page';

const routes: Routes = [
  {
    path: '',
    component: LikedRestaurantsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LikedRestaurantsPageRoutingModule {}
