import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { restaurant } from '../_models/restaurants';
import { RestaurantService } from './restaurant.service';

@Injectable({
  providedIn: 'root'
})
export class RestaurantResolverService implements Resolve<restaurant> {

  constructor(private restaurantservice:RestaurantService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  Observable<restaurant>  {
    return this.restaurantservice.getRestaurant(route.paramMap.get('restaurant'));
  }
}
