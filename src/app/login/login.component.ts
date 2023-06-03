import { Component } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private http:SharedService){}
 userInfo={
  email:"",
  password:""
 }
 userName=""
  login() {
    this.http.login(this.userInfo).subscribe((res:any)=>{
      console.log(res)
      sessionStorage.setItem('token',res.tokens);
      
      console.log(this.userName)
    },err=>{
      console.log(err)
    })
 }
 
}
