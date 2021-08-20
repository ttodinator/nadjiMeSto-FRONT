import { Component, OnInit } from '@angular/core';
import { RestaurantService } from '../_services/restaurant.service';

@Component({
  selector: 'app-restaurant-photos-upload',
  templateUrl: './restaurant-photos-upload.page.html',
  styleUrls: ['./restaurant-photos-upload.page.scss'],
})
export class RestaurantPhotosUploadPage implements OnInit {
  profilePhotoFile:File=null;
  counter:number=0;

  constructor(private restaurantService:RestaurantService) { }

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
}
