import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Booking } from './admin-login/Booking';

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private resturl: string = 'http://localhost:8080/cinematicket/booking';
bookingDetails:any={};
seats:any=[];

  constructor(private http: HttpClient) {}
  
    
  httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json',
  }),
  };

  addBooking(booking: any): Observable<Booking[]> {
  
    return this.http
    .post<Booking[]>(this.resturl + '/setbooking',JSON.stringify(booking),this.httpOptions).pipe(retry(1), catchError(this.handleError));
    
    }

    saveBookingDetails(booking: any){
      this.bookingDetails=booking;
    }
    getBookingDetails():Observable<Booking>{
      return of(this.bookingDetails);
    }

    saveSeats(seats:any){
      this.seats=seats;
    }

    getSeats():Observable<any[]>{
      return of(this.seats);
    }

    handleError(err: { error: { message: string; }; status: any; message: any; }) {
    
      let errorMessage = '';
          
      if (err.error instanceof ErrorEvent) {
       
      errorMessage = err.error.message;
          
      } else {
      
      errorMessage = `Error code : ${err.status} \n Error Message : ${err.message}`;
         
       }
          
      window.alert(errorMessage);
          return throwError(errorMessage);
        
      }
      }