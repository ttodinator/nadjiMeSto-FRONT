import { Photo } from "./photo";

export interface restaurant{
    restaurantId:number,
    name:string,
    adress:string,
    phoneNumber:string
    photos:Photo[];
}