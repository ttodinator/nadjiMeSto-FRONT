import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestaurantPhotosUploadPage } from './restaurant-photos-upload.page';

const routes: Routes = [
  {
    path: '',
    component: RestaurantPhotosUploadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RestaurantPhotosUploadPageRoutingModule {}
