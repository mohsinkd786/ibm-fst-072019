import { Injectable } from '@angular/core';
import { Emp } from './structures/Emp';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users:Emp[]
  constructor() { }

  addUser(){
    const dt = new Date();
    //dt.getMilliseconds();
    dt.setFullYear(2018);
    dt.setDate(11);
    dt.setMonth(0);

    this.users.push({
      id: 4,
      name: 'Zack',
      dob: dt
    });
    return this.users;
  }
  getUsers(){
    return this.users =[
      {
        id: 1,
        name: 'John',
        dob: new Date()
      },
      {
        id: 2,
        name: 'Martin',
        dob: new Date()
      },
      {
        id: 3,
        name: 'Bob',
        dob: new Date()
      },
      {
        id: 4,
        name: 'Zuccini',
        dob: new Date()
      }
    ]
  }
}
