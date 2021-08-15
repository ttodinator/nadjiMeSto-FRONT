import { Component, OnInit } from '@angular/core';
import { take } from 'rxjs/operators';
import { User } from '../_models/user';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user:User;
  profilePhotoFile:File=null;

  constructor(private userService:UserService, public accountService:AccountService,private router:Router,private sanitizer: DomSanitizer) {
    this.accountService.currentUser$.pipe(take(1)).subscribe(user=>{
      this.user=user;
    })
   }

   sanitizeImageUrl(imageUrl: string): SafeUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(imageUrl);
}

  ngOnInit() {

    //console.log(this.user);
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
  const element = event.currentTarget as HTMLInputElement;
  let fileList: FileList | null = element.files;
  this.profilePhotoFile=element.files[0];
}

uploadImage(){
  this.accountService.uploadProfilePicture(this.profilePhotoFile).subscribe(res=>{

  })  
  this.accountService.updateProfilePhoto().subscribe(response=>{
    location.reload();
  })

}

}
