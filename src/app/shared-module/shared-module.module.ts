import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RestaurantCardComponent } from '../restaurants/restaurant-card/restaurant-card.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    RestaurantCardComponent,
  ],
  declarations: [
    RestaurantCardComponent
  ]
})
export class SharedModuleModule { }
