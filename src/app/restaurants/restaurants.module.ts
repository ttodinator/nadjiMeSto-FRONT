import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantsPageRoutingModule } from './restaurants-routing.module';

import { RestaurantsPage } from './restaurants.page';
import { RestaurantsListComponent } from './restaurants-list/restaurants-list.component';
import { RestaurantDetailComponent } from './restaurant-detail/restaurant-detail.component';
import { RestaurantCardComponent } from './restaurant-card/restaurant-card.component';
import { SharedModuleModule } from '../shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SharedModuleModule,
    RestaurantsPageRoutingModule,
  ],
  exports:[RestaurantsListComponent],
  declarations: [RestaurantsPage,RestaurantsListComponent,RestaurantDetailComponent,RestaurantCardComponent]
})
export class RestaurantsPageModule {}
