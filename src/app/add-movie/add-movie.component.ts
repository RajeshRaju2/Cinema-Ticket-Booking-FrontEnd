import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'add-movie',
  templateUrl: './add-movie.component.html',
  styleUrls: ['./add-movie.component.css']
})

export class AddMovieComponent implements OnInit {
movieDetails:any={movieName:'',language:'',amount:'',description:''};
movDet:any={};
flag:any=false;
  constructor(private router:Router,private adminService:AdminService){ }

  ngOnInit(): void {
    this.adminService.getSetMovie().subscribe(data=>(this.movDet=data));
     if(Object.keys(this.movDet).length === 0){
       this.flag=this.flag;
     }else{
      this.flag=!this.flag;
     }
  }

  addMovie(){
    this.adminService.addMovie(this.movieDetails).subscribe(data=>{
      alert("New Movie Added Successfully");
      this.router.navigate(['/home']);
      console.log(this.movieDetails);
      
      this.adminService.movieDetails(this.movieDetails);
    })
  }

  update(){
    this.adminService.addMovie(this.movDet).subscribe(data=>{
      alert("Movie Updated Successfully");
      this.router.navigate(['/home']);
      console.log(this.movDet);
      
      this.adminService.movieDetails(this.movDet);
    })
  }

}
