import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { RestaurantDetailComponent } from './restaurants/restaurant-detail/restaurant-detail.component';
import { RestaurantResolverService } from './_services/restaurant-resolver.service';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
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
  },  {
    path: 'restaurant-reservation',
    loadChildren: () => import('./restaurant-reservation/restaurant-reservation.module').then( m => m.RestaurantReservationPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
