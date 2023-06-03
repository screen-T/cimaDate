import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private http:SharedService , private router:Router){}
 userInfo={
  email:"",
  password:""
 }

  login() {
    this.http.login(this.userInfo).subscribe((res:any)=>{
      console.log(res)
      sessionStorage.setItem('token',res.tokens);
      this.router.navigate(['/']);
      
    },err=>{
      console.log(err)
    })
 }
 
}
