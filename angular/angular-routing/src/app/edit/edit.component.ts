import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }

  uId:string
  ngOnInit() {
    this.uId = this.route.snapshot.params.id;
  }
}
