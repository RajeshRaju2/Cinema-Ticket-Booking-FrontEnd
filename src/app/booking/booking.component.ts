import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../booking.service';
import { UserserviceService } from '../userservice.service';

@Component({
  selector: 'booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
details:any={};
nos:number=0;
public bookingDetails:any={
  movieName:'',
  language:'',
  showDate:'',
  startTime:'',
  no_ofseatNameSelected:'',
  amount:''};

  constructor(private service:UserserviceService,private router:Router,public bookingService:BookingService) { }

  ngOnInit(): void {
    this.service.getMovieDetails().subscribe(data=>(this.details=data));
    console.log(this.details);
    
  }
  bookTicket(){
    this.bookingDetails.movieName=this.details.movie;
    this.bookingDetails.language=this.details.language;
    this.bookingDetails.no_ofseatNameSelected=this.nos;
    this.bookingDetails.amount=this.nos*100;
    this.bookingService.addBooking(this.bookingDetails).subscribe(data=>{
         this.router.navigate(['/seats']);});
         console.log(this.bookingDetails);
         this.bookingService.saveBookingDetails(this.bookingDetails);
         
  }

}
