import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { restaurant } from '../_models/restaurants';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class RestaurantService {

  baseUrl=environment.apiUrl;

  constructor(private http:HttpClient) { }


  getAllRestaurants(){
    return this.http.get<restaurant[]>(this.baseUrl+'restaurant');
  }

  getRestaurant(name:string){
    return this.http.get<restaurant>(this.baseUrl+'restaurant/'+name);
  }
  
}
