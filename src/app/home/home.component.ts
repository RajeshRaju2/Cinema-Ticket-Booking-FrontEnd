import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  isLoggedIn:any = false;
  temp:any=false;
  isShow1:any=false;
  isShow2:any=false;
  isShow3:any=false;
  isShow4:any=false;
  isShow5:any=false;
  isShow6:any=false;
  isShow7:any=false;
  isShow8:any=false;
  isShow9:any=false;
  detail:any={movie:"",img:"",language:""};
  movieDetails:any={};
movieInfo:any=false;


  constructor(private service:UserserviceService,private router:Router,private adminService:AdminService) { }

  ngOnInit(): void {
  this.service.getLoginConfirmation().subscribe(data=>(this.isLoggedIn=data));
  console.log(this.isLoggedIn);
  this.adminService.getAdminInfo().subscribe(data=>(this.temp=data));
  this.adminService.getmovieDetails().subscribe(data=>(this.movieDetails=data));
  console.log(this.movieDetails);
  
  if(Object.keys(this.movieDetails).length === 0){
            this.movieInfo=this.movieInfo;
            console.log(this.movieInfo);
            
  }else{
      this.movieInfo=!this.movieInfo;
      // console.log(this.movieInfo);
      
  }
  }

  updateMovie(){
    this.adminService.setMovie(this.movieDetails);
    this.router.navigate(['/add-movie']);
  }

toggle1(){
  this.isShow1 = !this.isShow1;
}
toggle2(){
  this.isShow2 = !this.isShow2;
}
toggle3(){
  this.isShow3 = !this.isShow3;
}
toggle4(){
  this.isShow4 = !this.isShow4;
}
toggle5(){
  this.isShow5 = !this.isShow5;
}
toggle6(){
  this.isShow6 = !this.isShow6;
}
toggle7(){
  this.isShow7 = !this.isShow7;
}
toggle8(){
  this.isShow8 = !this.isShow8;
}
toggle9(){
  this.isShow9 = !this.isShow9;
}
toggle10(){
  this.movieInfo=!this.movieInfo;
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

