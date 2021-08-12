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


@NgModule({
  declarations: [AppComponent,NavComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule,HttpClientModule,FormsModule,ReactiveFormsModule],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { provide :HTTP_INTERCEPTORS,useClass:JwtService,multi:true}
  
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
