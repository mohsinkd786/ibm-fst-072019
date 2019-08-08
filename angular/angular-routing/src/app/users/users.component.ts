import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  registerObj:User

  constructor(private route:ActivatedRoute,private router:Router) { }

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
}
interface User{
  name:string
  cell:number
}