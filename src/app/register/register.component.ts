import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { SharedService } from '../shared.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  constructor(public server:SharedService){}
userInfo={
  name:"", 
  lastname:'', 
  email:"", 
  password:""
}
ajout(){
  this.server.register(this.userInfo).subscribe((res)=>{
    console.log(res)
  },
  error=>{
    console.log(error)
  }
  )
}
}
