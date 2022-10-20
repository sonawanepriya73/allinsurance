import { Component, OnInit } from '@angular/core';

import { ApiServiceService} from '../api service/api-service.service';



@Component({
  selector: 'app-sample11',
  templateUrl: './sample11.component.html',
  styleUrls: ['./sample11.component.css']
})
export class Sample11Component implements OnInit {

cdata :any;
showdata:any;
update:any;


  constructor(private api:ApiServiceService,) { }



  //checkFlag:boolean=true;
  checkFlag:boolean=false;

  structure:any=[ 'footing','column' ,'beam','wall','slab' ];
   structureFlag:boolean=true;
     
   data1:any;
   data2:any;
   

  ngOnInit(): void {
    this.getData();
    this.sendData();
    this.updateData();
    this.deleteData();

     }

  getData(){
 this.api.getApiData().subscribe (
 (res:any) =>{
 console.log(res);
 this.showdata=res;
  },
  (err:any) =>{
    console.log(err);
  }

 )}

  // sendData(){
  // //  this.data1={
  // //   name:'Priya ',
  // //   job :' Civil Engineer ',
  // //   jobprofile:'Junior civil Eng At WCD'

  // // }

  // this .cdata ={
  //   id:11,
  //   name:"piu",
  //   username:"piu sonawane",
  //   email:"sonawanepiu1999@gmail.com"
  // }

  //  this.api.sendApiData(this.cdata).subscribe (
  //   (res:any) =>{
  //     console.log(res)

  //     this.cdata = res

  //     this.showdata.push(this.cdata)
  //   }
  //  )

  //  }

  sendData(){
    this.cdata={
      id:11,
      name:"piu",
      username:"piu sonawane",
      email:"sonawanepiu1999@gmail.com"
    }
    this.api.sendApiData(this.cdata).subscribe(
      (res:any)=>{
        console.log(res)
        this.cdata = res
        this.showdata.push(this.cdata)
      }
    )
  }

  updateData(){
    this.update={
      id:11,
      name:"prajyot",
      username:"pr sonawane",
      email:"sonawanepiu1999@gmail.com"
    }
    let id=2
    this.api.updateApiData(this.update,id).subscribe(
      (res:any)=>{
        console.log(res)
        this.cdata = res
        this.showdata.push(this.update)
      }
    )
  }


  

   deleteData(){
     let idd=2;
     this.api.deleteApiData(idd).subscribe(
      (res:any)=>{
        console.log("Data Deleted Successfully");
        console.log(res);
      },
      (err:any)=>{
        console.log(err);
      }
     )
   



   }




  }
