import { Component, Input, OnInit } from '@angular/core';
import { Reservation } from '../_models/reservation';

@Component({
  selector: 'app-reservation-card',
  templateUrl: './reservation-card.component.html',
  styleUrls: ['./reservation-card.component.scss'],
})
export class ReservationCardComponent implements OnInit {
  @Input()reservation:Reservation
  constructor() { }

  ngOnInit() {}

}
