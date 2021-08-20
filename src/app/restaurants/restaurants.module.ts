import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantsPageRoutingModule } from './restaurants-routing.module';

import { RestaurantsPage } from './restaurants.page';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantsListComponent } from './restaurants-list/restaurants-list.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantsPageRoutingModule,
    SharedModuleModule
  ],
  exports:[RestaurantsListComponent],
  declarations: [RestaurantsPage,RestaurantDetailComponent,RestaurantsListComponent]
})
export class RestaurantsPageModule {}
