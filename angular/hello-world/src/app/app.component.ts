import { Component } from '@angular/core';
import { Emp } from './structures/Emp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  heading:string = 'hello-world';
  _msg:string = "Welcome to Employees";
  detailsFromEmp:Emp;

  getDetailsFromEmp($event){
    this.detailsFromEmp = $event;
  }
}