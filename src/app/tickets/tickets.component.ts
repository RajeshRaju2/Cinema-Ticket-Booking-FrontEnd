import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BookingService } from '../booking.service';

@Component({
  selector: 'tickets',
  templateUrl: './tickets.component.html',
  styleUrls: ['./tickets.component.css']
})
export class TicketsComponent implements OnInit {
bookingDetails:any={};
seats:any=[];
status:any=false;
  constructor(private bookingService:BookingService,private router:Router) { }

  ngOnInit(): void {
    this.bookingService.getBookingDetails().subscribe(data=>(this.bookingDetails=data));
    this.bookingService.getSeats().subscribe(data=>(this.seats=data));
    this.bookingService.getbookingStatus().subscribe(data=>(this.status=data));
  }


}
