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

  getTables(model:number){
    return this.http.get<restaurant>(this.baseUrl+'restaurant/filter/'+model);
  }

  likeRestaurant(id:number){
    //this.toastr.success('Destination added to liked list')
    return this.http.post(this.baseUrl+'user/like/'+id.toString(),{})
  }
  unlikeRestaurant(id:number){
    //this.toastr.error('Destination removed from liked list')
    return this.http.delete(this.baseUrl+'user/unlike/'+id.toString(),{})
  }
  
}
