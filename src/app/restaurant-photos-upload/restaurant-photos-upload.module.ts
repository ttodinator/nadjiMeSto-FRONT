import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RestaurantPhotosUploadPageRoutingModule } from './restaurant-photos-upload-routing.module';

import { RestaurantPhotosUploadPage } from './restaurant-photos-upload.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RestaurantPhotosUploadPageRoutingModule
  ],
  declarations: [RestaurantPhotosUploadPage]
})
export class RestaurantPhotosUploadPageModule {}
