import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

public logcred:any = {email:'',password:''};
msg='';
checking:any = {email:'',password:''};


  constructor(public router:Router,public aroute:ActivatedRoute,public service:UserserviceService) { }

  ngOnInit(): void {
    
  }

  validateUser(){

this.service.validateUser(this.logcred).subscribe(data=>(this.checking=data));

    if(this.checking.email == ""  &&  this.checking.password == "" ){
      this.router.navigate(['/login']);
     this.msg="Invalid Username or Password";
    }else{
      this.router.navigate(['/home']);
      
    }
    console.log(this.checking);
    this.service.logIn(this.checking);
  }
  
}



