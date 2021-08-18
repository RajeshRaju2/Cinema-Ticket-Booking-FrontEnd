import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { User } from './User';


@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private resturl: string = 'http://localhost:8080/rll/user';


  constructor(private http: HttpClient) {}
  
    
  httpOptions = {
  headers: new HttpHeaders({
  'Content-Type': 'application/json',
  }),
  };
  
   
  getUsers(): Observable<User[]> {
  
  return this.http
  .get<User[]>(this.resturl + '/allUser').pipe(retry(1), catchError(this.handleError));
  
  }

  addUser(user: any): Observable<User[]> {
  
    return this.http
    .post<User[]>(this.resturl + '/addUser',JSON.stringify(user),this.httpOptions).pipe(retry(1), catchError(this.handleError));
    
    }

    deleteUser(uid: any): Observable<User> {
  
      return this.http
      .delete<User>(this.resturl + '/deleteUser/' + uid,this.httpOptions).pipe(retry(1), catchError(this.handleError));
      
      }

      getAUser(uid: any): Observable<User> {
 
        return this.http
     .get<User>(this.resturl + '/searchUser/' + uid,this.httpOptions).pipe(retry(1), catchError(this.handleError));
      
      }
     
       

      updateUser(user:any):Observable<User>{
        return this.http
        .put<User>(this.resturl + '/updateUser',JSON.stringify(user),this.httpOptions).pipe(retry(1), catchError(this.handleError));
      }

      
      validateUser(user:any):Observable<User>{
        return this.http.post<User>(this.resturl + '/validateUser',JSON.stringify(user),this.httpOptions).pipe(retry(1),catchError(this.handleError));
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