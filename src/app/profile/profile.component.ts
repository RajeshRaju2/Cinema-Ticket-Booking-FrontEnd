import { Component, Input, OnInit } from '@angular/core';
import { UserserviceService } from '../userservice.service';


@Component({
  selector: 'profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
newResult:any={};
  constructor(private service:UserserviceService) { }

  ngOnInit(): void {
this.service.$isLoggedIn.subscribe(data=>(this.newResult=data));
  }
updateUser(){
  console.log(this.newResult);
  
}
}
