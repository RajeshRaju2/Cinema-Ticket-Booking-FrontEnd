import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn:any = false;
  temp:any=false;

  constructor(private service:UserserviceService,private router:Router) { }

  ngOnInit(): void {
  this.service.getLoginConfirmation().subscribe(data=>(this.isLoggedIn=data));
  console.log(this.isLoggedIn);
  }
  
  loggedOut(){
    // this.service.loginConfirmation(this.temp);
    this.router.navigate(['/home']);
  }

}
