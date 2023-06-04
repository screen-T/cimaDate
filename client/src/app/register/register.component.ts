import { FormsModule } from '@angular/forms'; 
import { SharedService } from '../shared.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(public server:SharedService , private router:Router){}
userInfo={
  name:"", 
  lastname:'', 
  email:"", 
  password:""
}
error=""
ajout(){
  this.server.register(this.userInfo).subscribe((res)=>{
    console.log(res)
    this.router.navigate(['/']);
  },
  error=>{
    this.error=error.error
    console.log(error , error.error)
  }
  )
}
}
