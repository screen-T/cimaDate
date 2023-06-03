import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit{
  token = sessionStorage.getItem('token')
  addClass: boolean = false;
   trig() {
    this.addClass = !this.addClass;
  }
  userName=""
  ngOnInit(): void {
    this.userName = this.getUserNameFromToken(this.token)
  }
  
  logout(){
    sessionStorage.removeItem('token')
  }
  getUserNameFromToken(token: any): string {
    const tokenPayload = token.split('.')[1];
    const decodedToken = JSON.parse(atob(tokenPayload));
    return decodedToken.name;
  }
}
