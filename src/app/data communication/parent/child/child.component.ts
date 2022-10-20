import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() parentData:any;

  @Output() itemtEvent = new EventEmitter<any>();

  dataFromChildToParent:any;
  constructor() {
    this.dataFromChildToParent = "This is the data from Child to Parent component";
   }

  ngOnInit(): void {
  }

  sendDataFromParent(){
    console.log("Hi");
    this.itemtEvent.emit(this.dataFromChildToParent);
  }

}