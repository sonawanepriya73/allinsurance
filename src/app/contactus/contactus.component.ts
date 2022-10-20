import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserdetailsService } from '../services/userdetails.service';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {

  data:any
  
  
  

  constructor( private ps:UserdetailsService,private route:Router) { 

    this.userDetailsForm();
    //this.userdeatils()
  }

  ngOnInit(): void {
  }
  userDetailsForm(){

    this.ps.getuserDetails().subscribe((res:any) =>{
      console.log(res);
      this.data=res;
    });
    (err:any) =>{
      console.log(err);
  }

  }

  userdeatails(dt:any){
    console.log(dt);
    let id= dt.id;
    let name = dt.name; 
    let email = dt.email;                       
    this.route.navigateByUrl(`staffdeatails/${id}/${name}/${email}`);

}



}
