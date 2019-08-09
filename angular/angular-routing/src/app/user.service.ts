import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  users:any[]
  _url = 'http://localhost:1269/users'
    
  constructor(private http:HttpClient) { }

  getUsers(callback){
    fetch(this._url)
    .then(res=>res.json())
    .then(users=>{
      callback(users);
    }).catch(err=>console.error(err));
    // http client
    this.getAllUsers((_data)=>{
      _data.users.forEach(u => {
        console.log(u);
      });
    });
  }
  getAllUsers(_callMe){
    console.log('getAllUsers()');
    this
    .http
    .get(this._url)
    .subscribe((_data)=>{
       //console.log(_data);
      _callMe(_data);
    });
  }
}
