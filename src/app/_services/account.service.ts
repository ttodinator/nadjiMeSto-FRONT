import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router, RouteReuseStrategy } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import {map} from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../_models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl=environment.apiUrl;
  private currentUserSource=new ReplaySubject<User>(1);
  currentUser$=this.currentUserSource.asObservable();

  constructor(private http:HttpClient,private router:Router) { }

  register(model:User){
    return this.http.post(this.baseUrl+'account/register',model).pipe(
      map((user: User)=>{
        if(user){

          this.setCurrentUser(user);
        }
        return user;
      })
    )
  }

  // login(model:User){
  //   //console.log(model);
  //   // return this.http.post('https://localhost:44387/api/account/login',model).subscribe(response=>{
  //   //   console.table(response);
      
  //   // },error=>{
  //   //   console.log(error);
  //   // })

  //   return this.http.post('https://localhost:44387/api/account/login',model).pipe(
  //     mergeMap((response:User)=>{
  //       const user=response;
  //       if(user){
  //         console.table(user);
  //         this.setCurrentUser(user);
  //       }
  //     }
      
  //     )
  //   )

  // }

  login(model:any){
    return this.http.post(this.baseUrl+'account/login',model).pipe(
      map((response:User)=>{
        const user=response;
        if(user){
          this.setCurrentUser(user);
        }
      }
      
      )
    )
  }

  setCurrentUser(user:User){
    console.log(user);
    user.roles=[];
    const roles=this.getDecodedToken(user.token).role;
    Array.isArray(roles)?user.roles=roles:user.roles.push(roles);

    localStorage.setItem('user',JSON.stringify(user));
    this.currentUserSource.next(user);
  }

  logout(){
    localStorage.removeItem('user');
    this.currentUserSource.next(null);
    //this.router.navigate([''])
  }

  getDecodedToken(token){
    return JSON.parse(atob(token.split('.')[1]));
  }

  doNothing(){
    const user:User=JSON.parse(localStorage.getItem('user'));
    //localStorage.setItem('user',JSON.stringify(user));
    this.currentUserSource.next(user);
  }

  // updateLikes(user:User){
  //   //console.table(user);
  //   localStorage.setItem('user',JSON.stringify(user));
  //   this.currentUserSource.next(user);
  // }



}
