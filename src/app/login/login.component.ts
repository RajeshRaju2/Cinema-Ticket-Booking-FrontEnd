import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

public logCredential:any = {email:'',password:''};
message='';
loggedUser:any = {email: '', password: ''};
isLoggedIn:any = false;

  constructor(public router:Router,public aroute:ActivatedRoute,public service:UserserviceService) { }

  ngOnInit(): void {
    
  }

  validateUser(){

this.service.validateUser(this.logCredential.email,this.logCredential.password).subscribe(data=>(this.loggedUser=data));

    if(this.loggedUser.email == ""  &&  this.loggedUser.password == "" ){
      this.router.navigate(['/login']);
     this.message="Invalid Username or Password";
    }else{
      this.router.navigate(['/home']);
      this.isLoggedIn=true;
    }
    console.log(this.loggedUser);
    this.service.loginUser(this.loggedUser);
    this.service.loginConfirmation(this.isLoggedIn);
  }
  
}



