import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit() {
      console.log('ID is ' +this.route.snapshot.params.id);
      console.log('ID via Param Map is '+this.route.snapshot.paramMap.get('id'));
  }

  redirect(){
    this.router.navigate(['edit',this.route.snapshot.params.id]);
  }
}
