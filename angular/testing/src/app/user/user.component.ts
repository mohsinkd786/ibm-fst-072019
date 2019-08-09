import { Component, OnInit } from '@angular/core';
import { UserService, User } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  _msg:string
  constructor(private service:UserService) {

  }

  ngOnInit() {
    this._msg = "Welcome";
  }

  clickMe(){
    return "Hello";
  }
  getUsers():User[]{
    return this.service.getUsers();
  }
}
