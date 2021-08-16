import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NavComponent } from './nav/nav.component';
import { FormsModule,ReactiveFormsModule,FormBuilder } from '@angular/forms';
import { JwtService } from './_services/jwt.service';
import {CommonModule } from '@angular/common';
import { HasRoleDirective } from './_directives/has-role.directive';


@NgModule({
  declarations: [AppComponent,NavComponent, HasRoleDirective],
  entryComponents: [],
  imports: [BrowserModule,CommonModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide : HTTP_INTERCEPTORS ,useClass:JwtService,multi:true}
  
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
