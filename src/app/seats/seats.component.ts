import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as $ from "jquery";
import { BookingService } from '../booking.service';


@Component({
  selector: 'app-seats',
  templateUrl: './seats.component.html',
  styleUrls: ['./seats.component.css']
})
export class SeatsComponent implements OnInit {
noOfSeat:number=0;
bookingDetails:any={};
allSeats:any = [];
  constructor(private router:Router,private bookingService:BookingService) { }

  ngOnInit(): void {
    this.bookingService.getBookingDetails().subscribe(data=>(this.bookingDetails=data));
  }
  ngAfterViewInit(){
    $(".seatStructure *").prop("disabled", true);
  }

  takeData(){
  $(".seatStructure *").prop("disabled", false);
  }


  saveDetails(){
    this.noOfSeat=this.bookingDetails.no_ofseatNameSelected;
    if ($("input:checked").length == (this.noOfSeat) ){
      var allSeatsVals: (string | number | string[] | undefined)[] = [];
      $('#seatsBlock :checked').each(function() {
        allSeatsVals.push($(this).val());
      });
      this.allSeats=allSeatsVals;
      console.log(this.allSeats);
      this.router.navigate(['/payment']);
      this.bookingService.saveSeats(this.allSeats);
      // $(":checkbox").prop('disabled', true);
      // $(':checked').prop('disabled', false);
    }
    else
      {
        alert("you can't select more or less than the selected seats");
      }

  }
}

