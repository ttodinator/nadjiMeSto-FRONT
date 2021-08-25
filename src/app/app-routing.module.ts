import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RestaurantDetailComponent } from './restaurants/restaurant-detail/restaurant-detail.component';
import { AdminGuard } from './_guards/admin.guard';
import { AuthenticationGuard } from './_guards/authentication.guard';
import { RestaurantGuard } from './_guards/restaurant.guard';
import { RestaurantResolverService } from './_services/restaurant-resolver.service';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
    
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: '',
    canActivate:[AuthenticationGuard],
    children:
    [

      {
        path: 'restaurants',
        loadChildren: () => import('./restaurants/restaurants.module').then( m => m.RestaurantsPageModule)
      },
      {
        path: 'profile',
        loadChildren: () => import('./profile/profile.module').then( m => m.ProfilePageModule)
      },
      {
        path:'restaurants/:restaurant',
        component:RestaurantDetailComponent,
        resolve:{restaurant:RestaurantResolverService}
      },
      {
        path: 'user-info-change',
        loadChildren: () => import('./user-info-change/user-info-change.module').then( m => m.UserInfoChangePageModule)
      },
      {
        path: 'liked-restaurants',
        loadChildren: () => import('./liked-restaurants/liked-restaurants.module').then( m => m.LikedRestaurantsPageModule)
      },
      {
        path: 'reservations',
        loadChildren: () => import('./reservations/reservations.module').then( m => m.ReservationsPageModule)
      },
      {
        path: 'restaurant-reservation',
        canActivate:[RestaurantGuard],
        loadChildren: () => import('./restaurant-reservation/restaurant-reservation.module').then( m => m.RestaurantReservationPageModule)
      },
      {
        path: 'restaurant-reservation-list',
        canActivate:[RestaurantGuard],
        loadChildren: () => import('./restaurant-reservation-list/restaurant-reservation-list.module').then( m => m.RestaurantReservationListPageModule)
      },
      {
        path: 'restaurant-photos-upload',
        canActivate:[RestaurantGuard],
        loadChildren: () => import('./restaurant-photos-upload/restaurant-photos-upload.module').then( m => m.RestaurantPhotosUploadPageModule)
      },
      {
        path: 'create-restaurant',
        canActivate:[AdminGuard],
        loadChildren: () => import('./create-restaurant/create-restaurant.module').then( m => m.CreateRestaurantPageModule)
      }
    ]

  },
  
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
