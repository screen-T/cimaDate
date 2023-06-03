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
  login() {
    this.http.login(this.userInfo).subscribe(res=>{
      console.log(res)

      
    },err=>{
      console.log(err)
    })
 }
}
