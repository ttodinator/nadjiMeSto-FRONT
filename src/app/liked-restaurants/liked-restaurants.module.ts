import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LikedRestaurantsPageRoutingModule } from './liked-restaurants-routing.module';

import { LikedRestaurantsPage } from './liked-restaurants.page';
import { SharedModuleModule } from '../shared-module/shared-module.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LikedRestaurantsPageRoutingModule,
    SharedModuleModule
  ],
  declarations: [LikedRestaurantsPage]
})
export class LikedRestaurantsPageModule {}
