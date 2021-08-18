import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { formatDate } from '@angular/common';
import { User } from '../_models/user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  baseUrl=environment.apiUrl;

  constructor(private http:HttpClient) { }

  uploadProfilePicture(file:File){
    const formData = new FormData();
    formData.append('files', file);
    return this.http.post<string>(this.baseUrl+'user/upload',formData).subscribe(()=>{
      
    })
  }

  getUser(){
    return this.http.get<User>(this.baseUrl+'user/get-user');
  }

}
