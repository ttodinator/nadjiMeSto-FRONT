import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { restaurant } from '../_models/restaurants';
import { LoginService } from '../_services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  res:restaurant;

  constructor(private router:Router,private ls:LoginService) {}

  goTo(){
    console.log('klik');
    this.ls.pozoviApi().subs()
  }


}
