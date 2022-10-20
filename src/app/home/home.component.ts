import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router) { }
staffData:any=[
  { name:'Priya', age:23, id:11},
    {name:'prajyot', age:20, id:12},
    {name:'Chinar', age:21, id:13},
    {name:'Rutvik', age:25, id:14}
]
  ngOnInit(): void {
  }

  showDetailsStaff(dt:any){
    console.log(dt);
    let id= dt.id;
    let name = dt.name;                       
    this.route.navigateByUrl(`staff/${id}/${name}`);

  }
}
