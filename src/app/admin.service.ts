import { HttpClient, HttpHeaders } from '@angular/common/http';
import {  Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
adminLogged:any=false;
movieDet:any={};
updatedMovie:any={};
private resturl: string = 'http://localhost:8080/cinematicket/movie';
  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
    'Content-Type': 'application/json',
    }),
    };


  adminInfo(adminInfo:any){
   this.adminLogged=adminInfo;
  }
  getAdminInfo():Observable<any>{
    return of(this.adminLogged);
  }

  movieDetails(movieDetails:any){
    this.movieDet=movieDetails;
   }
   getmovieDetails():Observable<any>{
     return of(this.movieDet);
   }

  getMovies(): Observable<any[]> {
  
    return this.http
    .get<any[]>(this.resturl + '/allMovie').pipe(retry(1), catchError(this.handleError));
    
    }
  
    addMovie(movie: any): Observable<any[]> {
    
      return this.http
      .post<any[]>(this.resturl + '/setmovie',JSON.stringify(movie),this.httpOptions).pipe(retry(1), catchError(this.handleError));
      
      }
  
      deleteMovie(mid: any): Observable<any> {
    
        return this.http
        .delete<any>(this.resturl + '/deleteMovie/' + mid,this.httpOptions).pipe(retry(1), catchError(this.handleError));
        
        }
  
        getAMovie(mid: any): Observable<any> {
   
          return this.http
       .get<any>(this.resturl + '/searchmovie/' + mid,this.httpOptions).pipe(retry(1), catchError(this.handleError));
        
        }
       
        setMovie(movie:any){
            this.updateMovie=movie;
        }

        getSetMovie():Observable<any>{

         return of(this.updateMovie);
      }
         
  
        updateMovie(movie:any):Observable<any>{
          return this.http
          .put<any>(this.resturl + '/updatemovie',JSON.stringify(movie),this.httpOptions).pipe(retry(1), catchError(this.handleError));
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
