import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
  dataFromParentToChild:any
  dataFromChildToParent:any;
  constructor() {
    this.dataFromParentToChild = "This is the data from parent to child component";
   }
  
  ngOnInit(): void {
  }


  emitDataFromchild(ev:any){
    console.log("Hello this is custom event");
    console.log(ev);
    this.dataFromChildToParent= ev;
  }

}

