import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
isAdminLogged:any=false;
  isLoggedIn:any = false;
  // temp:any=false;

  constructor(private service:UserserviceService,private router:Router,private adminService:AdminService) { }

  ngOnInit(): void {
  this.service.getLoginConfirmation().subscribe(data=>(this.isLoggedIn=data));
  console.log(this.isLoggedIn);
  this.adminService.getAdminInfo().subscribe(data=>(this.isAdminLogged=data));
  }
  
  loggedOut(){
    // this.service.loginConfirmation(this.temp);
    this.router.navigate(['/home']);
  }


}
