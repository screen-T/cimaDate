import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  constructor(private router:Router , private location: Location){}
  token = sessionStorage.getItem('token')
  addClass: boolean = false;
   trig() {
    this.addClass = !this.addClass;
  }
  userName=""
  ngOnInit(): void {
    if(this.token)
    this.userName = this.getUserNameFromToken(this.token)
  }
  
  logout(){
    sessionStorage.removeItem('token')
    this.location.go(this.location.path());
  }
  getUserNameFromToken(token: any): string {
    const tokenPayload = token.split('.')[1];
    const decodedToken = JSON.parse(atob(tokenPayload));
    return decodedToken.name;
  }
}
