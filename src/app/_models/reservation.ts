export interface Reservation{
    reservationId:number;
    appUserId:number;
    RestaurantId:number;
    timeOfTheDay:string;
    date:Date,
    occupied:boolean
}