import { RestaurantTable } from "./restaurantTable";
import { User } from "./user";

export interface Reservation{
    reservationId:number;
    appUserId:number;
    RestaurantId:number;
    timeOfTheDay:string;
    date:Date;
    occupied:boolean;
    restaurantName:string;
    restaurantTable:RestaurantTable
    appUser:User;
}