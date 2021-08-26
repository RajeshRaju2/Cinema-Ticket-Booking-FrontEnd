import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

email:any="";
password:any="";
adminLogged:any=false;
message:any="";

  constructor(private router:Router,private adminService:AdminService) { }

  ngOnInit(): void {
  }

  validateAdmin(){
    if(this.email == "rdn025@gmail.com"  &&  this.password == "boss" ){
      this.router.navigate(['/home']);
      this.adminLogged=true;
      this.adminService.adminInfo(this.adminLogged);
      
    }else{
      this.router.navigate(['/admin-login']);
     this.message="Invalid Username or Password";
    }
  }

}
