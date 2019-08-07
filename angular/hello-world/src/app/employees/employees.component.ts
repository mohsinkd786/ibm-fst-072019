import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from '../user.service';
import { Emp } from '../structures/Emp';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit {

  constructor(private uService: UserService) { }

  emps:Emp[]
  
  @Input() message:string

  @Output() _empDetails = new EventEmitter(); 

  ngOnInit() {
    this.emps = this.uService.getUsers();
  }

  clickMe(){
    this.emps = this.uService.addUser();
    // send data to App Component
    this._empDetails.emit(this.emps[0]);
  }
}
