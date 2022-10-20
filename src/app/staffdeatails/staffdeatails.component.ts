import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-staffdeatails',
  templateUrl: './staffdeatails.component.html',
  styleUrls: ['./staffdeatails.component.css']
})
export class StaffdeatailsComponent implements OnInit {

userid:any;
username:any;
useremail:any;

  constructor(private actRoute: ActivatedRoute) {
     
  //  to fetch the route data we have two options
    
    // 1. Route Param (Direct Values)
    console.log(this.actRoute.snapshot.params);
    //  this.userid= this.actRoute.snapshot.params['id'];
    //  this.username = this.actRoute.snapshot.params['name'];
    //  this.username = this.actRoute.snapshot.params['email'];

 // 2. Param Map (Obserrvable values)
 console.log(this.actRoute.paramMap);
 this.actRoute.paramMap.subscribe((res:any)=>{
   console.log(res);
   this.userid = res.params.id;
   this.username= res.params.name;
   this.useremail= res.params.email;
 })
}
  

  ngOnInit(): void {
  }

}
