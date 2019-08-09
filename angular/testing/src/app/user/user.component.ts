import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  _msg:string
  constructor() { }

  ngOnInit() {
    this._msg = "Welcome";
  }

  clickMe(){
    return "Hello";
  }
}
