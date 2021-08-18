import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
public userDetail:any = {userId:'', fname: '', lname: '', gender: '', email: '', password: '', phone:''};

  constructor(public router:Router,public aroute:ActivatedRoute,public service:UserserviceService) { }

  ngOnInit(): void {
  }

  newUser(){
    this.service.addUser(this.userDetail).subscribe((data : {})=>{this.router.navigate(['/login']);});
  }
}
