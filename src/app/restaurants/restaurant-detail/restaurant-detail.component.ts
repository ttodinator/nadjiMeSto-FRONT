import { Component, ComponentFactoryResolver, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule, ToastController } from '@ionic/angular';
import { take } from 'rxjs/operators';
import { restaurant } from 'src/app/_models/restaurants';
import { User } from 'src/app/_models/user';
import { AccountService } from 'src/app/_services/account.service';
import { RestaurantService } from 'src/app/_services/restaurant.service';
import { toastController } from '@ionic/core';


@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss'],
})
export class RestaurantDetailComponent implements OnInit {

  restaurant:restaurant;
  imagesList: string[]=['assets/images/a (2).jpg','assets/images/a (3).jpg','assets/images/a (4).jpg','assets/images/a (5).jpg','assets/images/a (6).jpg'];
  displayStyle='none';
  seatingList:number[];
  chosedRestaurant=false;
  dateAAAA:Date=new Date();
  minDate:string;
  model:any;
  timeOfTheDay;
  seating;
  date:Date=new Date();
  user:User;

  constructor(private route:ActivatedRoute,public toastController: ToastController, private restaurantService:RestaurantService,private accountService:AccountService) {
    this.accountService.currentUser$.pipe(take(1)).subscribe(user=>{
      this.user=user;
    })
   }

  imgSlide={
    freeMode:true,
    slidesPerView:1,
    slidesOffsetBefore:11,
  };

  ngOnInit() {
    this.route.data.subscribe(data=>{
      //console.log(data);
      this.restaurant=data.restaurant;
    })

    this.restaurantService.getTables(this.restaurant.restaurantId).subscribe(res=>{
      this.seatingList=res;
      console.log(this.seatingList)
    })

    //this.date.setDate(this.date.getDate() + 1);

  }

  openReservation(){
    if(this.displayStyle=='block'){
      this.displayStyle='none'
    }else{
      this.displayStyle='block'
    }
  }

  buttonClicked(){

  }


  async reserve(){

    let x=this.restaurant.restaurantId
    console.log(x);
    this.model=({
      restaurantId:this.restaurant.restaurantId,
      restaurantName:this.restaurant.name,
      timeOfTheDay:this.timeOfTheDay,
      seating:this.seating,
      date:this.date,
    });

    const toastTrue=await this.toastController.create({
      message: "Vasa rezervacija je napravljena",
      duration: 5000

    });
    const toastFalse=await this.toastController.create({
      message: "Za izabrane kriterijume nema slobodnih stolova",
      duration: 5000

    });
    console.log(this.model);
    this.restaurantService.reserve(this.model).subscribe(res=>{
      console.log(res);
      
        toastTrue.present();
      
    }, error=>{
      toastFalse.present();
    })
    
    

  }

}
