import { Component, ComponentFactoryResolver, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { restaurant } from 'src/app/_models/restaurants';


@Component({
  selector: 'app-restaurant-detail',
  templateUrl: './restaurant-detail.component.html',
  styleUrls: ['./restaurant-detail.component.scss'],
})
export class RestaurantDetailComponent implements OnInit {

  restaurant:restaurant;
  imagesList: string[]=['assets/images/a (2).jpg','assets/images/a (3).jpg','assets/images/a (4).jpg','assets/images/a (5).jpg','assets/images/a (6).jpg'];

  constructor(private route:ActivatedRoute) { }

  imgSlide={
    freeMode:true,
    slidesPerView:1,
    slidesOffsetBefore:11,
  };

  ngOnInit() {
    this.route.data.subscribe(data=>{
      console.log(data);
      this.restaurant=data.restaurant;
    
      
    })
  }

}
