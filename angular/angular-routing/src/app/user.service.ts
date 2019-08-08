import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:any[]
  constructor() { }
  getUsers(callback){
    const _url = 'http://localhost:1269/users'
    fetch(_url)
    .then(res=>res.json())
    .then(users=>{
      callback(users);
    }).catch(err=>console.error(err));
  }
  getAllUsers(){
    
  }
}
