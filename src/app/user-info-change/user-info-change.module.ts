import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import { UserInfoChangePageRoutingModule } from './user-info-change-routing.module';

import { UserInfoChangePage } from './user-info-change.page';

import { FormsModule,ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    UserInfoChangePageRoutingModule
  ],
  declarations: [UserInfoChangePage]
})
export class UserInfoChangePageModule {}
