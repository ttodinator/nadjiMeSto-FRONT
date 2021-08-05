import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http:HttpClient) { }

  pozoviApi(){
    return this.http.get('https://localhost:5001/api/restaurant').subscribe(uspeh=>{
      console.log(uspeh);
    })
  }

}
