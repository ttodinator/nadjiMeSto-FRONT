import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { restaurant } from '../_models/restaurants';
import { environment } from 'src/environments/environment';
import { Reservation } from '../_models/reservation';


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
    return this.http.get<number[]>(this.baseUrl+'restaurant/filter/'+model);
  }

  reserve(model:any){
    return this.http.post<Reservation>(this.baseUrl+'reservation',model);
  }

  getCountedTables(restaurant:number,seating:number){
    let a:any;
    a.restaurantId=restaurant;
    a.seating=seating;
    return this.http.get<number>(this.baseUrl+'restaurant/count-tables',a);
  }

  likeRestaurant(id:number){
    //this.toastr.success('Destination added to liked list')
    return this.http.post(this.baseUrl+'user/like/'+id.toString(),{})
  }
  unlikeRestaurant(id:number){
    //this.toastr.error('Destination removed from liked list')
    return this.http.delete(this.baseUrl+'user/unlike/'+id.toString(),{})
  }
  getAllReservations(){
      return  this.http.get<Reservation[]>(this.baseUrl+'reservation')
     
  }
  getDailyReservations(id: number,date: Date){
    return this.http.get<Reservation[]>(this.baseUrl+'reservation/daily?restaurantId='+id.toString()+'&date='+date.toString())
  }

  uploadPhoto(file:File){
    const formData = new FormData();
    formData.append('file', file);
    return this.http.post<string>(this.baseUrl+'restaurant/upload',formData);
  }

}
