import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators, RequiredValidator } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users:any[]
  registerObj:User
  signupFrm:FormGroup
  validError:string =''
  constructor(private route:ActivatedRoute,private router:Router,private userService: UserService) { 
    this.getUsers();
    this.createSignupForm(); // build the signup form
  
  }
  getUsers(){
    this.userService.getUsers((data)=>{
      this.users = data.users;
    });
  }
  ngOnInit() {
      console.log('ID is ' +this.route.snapshot.params.id);
      console.log('ID via Param Map is '+this.route.snapshot.paramMap.get('id'));
    // setup
    this.registerObj={
      name: 'admin',
      cell: 1234
    }

  }

  redirect(){
    this.router.navigate(['edit'],{ queryParams:{ id: this.route.snapshot.params.id }});
  }
  redirectToQueryParams(){
    this.router.navigate(['/params'], { queryParams: {id:7 , name:'ibm' } });
  }
  login(_data){
    console.log(_data);
    this.registerObj.name = _data.user
    this.registerObj.cell = _data.pass
  }
  registerAndLogin(){
    console.log(this.registerObj);
  }
  signUp(){
    //signupFrm
    console.log(this.signupFrm);

    if(this.signupFrm.status == 'INVALID'){
      this.validError = 'Please fill in the valid fields!'
    }
  }
  createSignupForm(){
    this.signupFrm = new FormGroup({
      email : new FormControl(
        'email@gg.com',
        Validators.required),
      street: new FormControl(
        'manyata',
        Validators.required) 
    });
  }
}
interface User{
  name:string
  cell:number
}