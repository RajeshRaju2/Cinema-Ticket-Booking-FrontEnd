import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { isEmpty } from 'rxjs/operators';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

public logcred:any = {email:'',password:''};

  constructor(public router:Router,public aroute:ActivatedRoute,public service:UserserviceService) { }

  ngOnInit(): void {
  }

  validateUser(){
    this.service.validateUser(this.logcred).subscribe((data:{}) => (this.logcred = data));
 if(this.logcred.hasOwnProperty('email'))
  {
    this.router.navigate(['/home']);
    }else{
      this.router.navigate(['/login']);
      
    }
  }

}
