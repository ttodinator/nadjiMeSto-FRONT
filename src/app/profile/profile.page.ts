import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { UserService } from '../_services/user.service';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user:User;
  profilePhotoFile:File=null;
  counter:number=0;
  photo:string='';

  constructor(private toast:ToastController,private userService:UserService, public accountService:AccountService,private router:Router,private sanitizer: DomSanitizer) {
    this.accountService.currentUser$.pipe(take(1)).subscribe(user=>{
      this.user=user;
      this.photo=user.profilePhotoUrl;
    })
   }

   sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(imageUrl);
}

  ngOnInit() {
    this.accountService.updateProfilePhoto().subscribe(response=>{
    })
    // this.accountService.currentUser$.pipe(take(1)).subscribe(user=>{
    //   this.user=user;
    // })
    // console.log(this.user.profilePhotoUrl)

  }
  logout(){    

    this.accountService.logout();
    this.router.navigateByUrl('');
  }

  fileChangeEvent(e: File[]){
     let filename = e[0];
     let fileType = filename.type;
}

aaa(event:Event){
  event.preventDefault
  const element = event.currentTarget as HTMLInputElement;
  let fileList: FileList | null = element.files;
  this.profilePhotoFile=element.files[0];
}

async uploadImage(){
  const toastFalse= await this.toast.create({
    message: "Profilna slika postavljena",
    duration: 5000,
    color: "success"

  });
  this.counter=this.counter+1;
  this.accountService.uploadProfilePicture(this.profilePhotoFile).subscribe(res=>{
    const words = this.photo.split('/');
    const words1=words[2].split('.');
    let num:number=+words1[0]+1
    let strPhoto=words[0]+'/'+words[1]+'/'+num+'.'+words1[1].toLowerCase;
    console.log(strPhoto);
    this.user.profilePhotoUrl=strPhoto;
    toastFalse.present();
    this.accountService.setCurrentUser(this.user);
  })  
}

}
