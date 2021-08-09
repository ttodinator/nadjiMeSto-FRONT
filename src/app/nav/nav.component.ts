import { Component, OnInit } from '@angular/core';
import { IonButton } from '@ionic/angular';
import { AccountService } from '../_services/account.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss'],
})
export class NavComponent implements OnInit {

  constructor(public acc:AccountService) { }

  ngOnInit() {
    this.acc.doNothing();
  }

}
