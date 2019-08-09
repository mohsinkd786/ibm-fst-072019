import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:User[]
  constructor() { 
    this.users=[
      {
        id: 1,
        name: 'Bob'
      },
      {
        id: 2,
        name: 'John'
      }
    ]
  }

  getUsers():User[]{
    return this.users;
  }
  addUser(_usr:User){
    this.users.push(_usr);
  }

  findUserById(_id){
    return this.users.find(u=>{
      return u.id == _id
    })
  }
}

export interface User{
  id: number,
  name: string
}