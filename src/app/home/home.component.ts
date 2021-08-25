import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  isLoggedIn:any = false;
  temp:any=false;
  detail:any={movie:"",img:"",language:""};



  constructor(private service:UserserviceService,private router:Router) { }

  ngOnInit(): void {
  this.service.getLoginConfirmation().subscribe(data=>(this.isLoggedIn=data));
  console.log(this.isLoggedIn);
  }

  book1(){
    this.detail.movie="Tiger Zinda Hai";
    this.detail.img="img1";
    this.detail.language="Hindi";
    this.bookingPage();
  }
  book2(){
    this.detail.movie="Robot 2.O";
    this.detail.img="img2";
    this.detail.language="Hindi";
    this.bookingPage();
  }
  book3(){
    this.detail.movie="Baazar";
    this.detail.img="img3";
    this.detail.language="Hindi";
    this.bookingPage();
  }
  book4(){
    this.detail.movie="Bloodshot";
    this.detail.img="img4";
    this.detail.language="English";
    this.bookingPage();
  }
  book5(){
    this.detail.movie="Crisis";
    this.detail.img="img5";
    this.detail.language="English";
    this.bookingPage();
  }
  book6(){
    this.detail.movie="Joker";
    this.detail.img="img6";
    this.detail.language="English";
    this.bookingPage();
  }
  book7(){
    this.detail.movie="South";
    this.detail.img="img7";
    this.detail.language="Tamil";
    this.bookingPage();
  }
  book8(){
    this.detail.movie="master";
    this.detail.img="img8";
    this.detail.language="Tamil";
    this.bookingPage();
  }
  book9(){
    this.detail.movie="ngk";
    this.detail.img="img9";
    this.detail.language="Tamil";
    this.bookingPage();
  }

  bookingPage(){
    
   this.service.movieDetails(this.detail);
    this.router.navigate(['/booking']);
    
  }

}

