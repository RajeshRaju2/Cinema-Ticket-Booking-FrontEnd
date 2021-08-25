import { Component, OnInit } from '@angular/core';
import { RouteConfigLoadStart, Router } from '@angular/router';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  purchased(){
    window.alert("Booking Successfull");
    this.router.navigate(['/home']);
  }

}
