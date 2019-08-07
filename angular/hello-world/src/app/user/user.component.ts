import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  message:string
  users:string[]
  employees:Employee[]
  showTable:boolean
  noRecordsMsg:string
  name:string
  constructor() { }

  @Input() getMessage:string;

  @Output() getUserDetailsFromUser = new EventEmitter();

  // on load method
  ngOnInit() {
    this.message = "Welcome to User Component";
    this.users=[
      "John",
      "Bob",
      "Adams",
      "Steve"
    ]
    //
    this.employees =[
      {
        id:1,
        name: 'Adams',
        email: 'ada@gg.com'
      },
      {
        id:2,
        name: 'Steve',
        email: 'steve@gg.com'
      },
      {
        id:3,
        name: 'Rogers',
        email: 'rogers@gg.com'
      }
    ]
    //end of emps
    this.showTable = this.employees.length > 0
    this.noRecordsMsg = "NO RECORDS FOUND";
  }
  clickMe(){
    //this.name = "Mohsin";
    this.getUserDetailsFromUser.emit("User is Saved Successfully"); 
  }
}
interface Employee{
  id:number
  name:string
  email:string
}

