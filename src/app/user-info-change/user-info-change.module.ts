import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { UserInfoChangePageRoutingModule } from './user-info-change-routing.module';

import { UserInfoChangePage } from './user-info-change.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    UserInfoChangePageRoutingModule
  ],
  declarations: [UserInfoChangePage]
})
export class UserInfoChangePageModule {}
