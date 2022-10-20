import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataSharingService } from '../data-sharing.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
data:any;

  constructor( private dataSer:DataSharingService ,private router:Router) {
    this.dataSer.getMessage().subscribe((res:any) =>{
      console.log(res);
      this.data = res;
     })
  }
   

  ngOnInit(): void {
  

  }
  sendDtFromSecond(){
    let dt =" This is data from second component to first component";
    this.dataSer.setMessage(dt);
    this.router.navigate(['first']);
  }

}
