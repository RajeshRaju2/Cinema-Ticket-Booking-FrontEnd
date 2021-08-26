import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../admin.service';

@Component({
  selector: 'update-movie',
  templateUrl: './update-movie.component.html',
  styleUrls: ['./update-movie.component.css']
})
export class UpdateMovieComponent implements OnInit {
// md:any={};
// movieDetails:any={};
  constructor(private router:Router,private adminService:AdminService) { }

  ngOnInit(): void {
  }

}
