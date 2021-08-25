import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';


@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
getUser:any={};
allUsers:any=[];

  constructor(private service:UserserviceService,private router:Router) { }

  ngOnInit(): void {
this.service.getLoginUser().subscribe(data=>(this.getUser=data));
  }

updateUser(){

 this.service.updateUser(this.getUser).subscribe(data=>(this.allUsers=data));
 window.alert("Profile Updated Successfully !!!") ;
 this.router.navigate(['/profile']);

}
}
