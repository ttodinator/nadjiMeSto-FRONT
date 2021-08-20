import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { take } from 'rxjs/operators';
import { restaurant } from 'src/app/_models/restaurants';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { RestaurantService } from 'src/app/_services/restaurant.service';

@Component({
  selector: 'app-restaurant-card',
  templateUrl: './restaurant-card.component.html',
  styleUrls: ['./restaurant-card.component.scss'],
})
export class RestaurantCardComponent implements OnInit {

  @Input() restaurant:restaurant;
  user:User;
  isLiked:boolean=false;
  mainImageUrl:string=''

  constructor(private router:Router,private accountService:AccountService,private restaurantService:RestaurantService) {
    this.accountService.currentUser$.pipe(take(1)).subscribe(user=>this.user=user);
    //console.log(this.user.likes);
   }
  

  ngOnInit() {
    if(this.user.likes.includes(this.restaurant.restaurantId)){
      this.isLiked=true;
    }else{
      this.isLiked=false;
    }
    for(let i=0;i<this.restaurant.photos.length;i++){
      if(this.restaurant.photos[i].isMain==true){
        this.mainImageUrl=this.restaurant.photos[i].url;
      }
    }
  }

  likeRestaurant(){
    this.isLiked=!this.isLiked;
    if(this.isLiked==true){
      this.addLike(this.restaurant);
    }
    if(this.isLiked==false){
      this.deleteLike(this.restaurant);
    }
  }

  deleteLike(restaurant:restaurant){


    this.restaurantService.unlikeRestaurant(restaurant.restaurantId).subscribe(()=>{
      const index=this.user.likes.indexOf(restaurant.restaurantId);
      if(index>-1){
        this.user.likes.splice(index,1);
        this.accountService.updateUser(this.user);
      }
    })
  }

  addLike(restaurant1:restaurant){
    this.restaurantService.likeRestaurant(restaurant1.restaurantId).subscribe(()=>{
      this.user.likes.push(restaurant1.restaurantId);
      this.accountService.updateUser(this.user);
    })
  }





  kl(){
    this.router.navigateByUrl('restaurants/'+this.restaurant.name);
  }

  kk(){
    console.log(1);
  }
  
}
