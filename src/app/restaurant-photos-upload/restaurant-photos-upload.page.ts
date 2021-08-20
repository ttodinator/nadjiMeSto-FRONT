import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { restaurant } from '../_models/restaurants';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';
import { RestaurantService } from '../_services/restaurant.service';

@Component({
  selector: 'app-restaurant-photos-upload',
  templateUrl: './restaurant-photos-upload.page.html',
  styleUrls: ['./restaurant-photos-upload.page.scss'],
})
export class RestaurantPhotosUploadPage implements OnInit {
  profilePhotoFile:File=null;
  counter:number=0;
  restaurant: restaurant;
  user:User;
  nesto:string;
  imgSlide={
    freeMode:true,
    slidesPerView:1,
    slidesOffsetBefore:11,
  };

  constructor(private accountService:AccountService,private restaurantService:RestaurantService) {
    this.accountService.currentUser$.pipe(take(1)).subscribe(response=>{
      this.user=response;
      this.nesto=this.toTitleCase(this.user.username);
      console.log(this.nesto);
      this.restaurantService.getRestaurant(this.nesto).subscribe(res=>{
        this.restaurant=res;
        console.log(this.restaurant)
      })
    })
   }

  ngOnInit() {
  }

  aaa(event:Event){
    event.preventDefault
    const element = event.currentTarget as HTMLInputElement;
    let fileList: FileList | null = element.files;
    this.profilePhotoFile=element.files[0];
  }
  
  uploadImage(){
    this.counter=this.counter+1;
    this.restaurantService.uploadPhoto(this.profilePhotoFile).subscribe(res=>{
      // const words = this.photo.split('/');
      // const words1=words[2].split('.');
      // let num:number=+words1[0]+1
      // let strPhoto=words[0]+'/'+words[1]+'/'+num+'.'+words1[1].toLowerCase;
      // console.log(strPhoto);
      // this.user.profilePhotoUrl=strPhoto;
      // this.accountService.setCurrentUser(this.user);
    })  
  }

  toTitleCase(str) {
    return str.replace(
      /\w\S*/g,
      function(txt) {
        return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
      }
    );
  }
}
