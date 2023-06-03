import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  
  constructor(private http:HttpClient) { }
  private url1 ="http://127.0.0.1:3000/"
  userInfo = {}
  register(userInfo : any){
    return this.http.post(this.url1 + 'user/register',userInfo );
  }
  login(userInfo : any){
    return this.http.post(this.url1 + 'user/login',userInfo )
  }
  
}
