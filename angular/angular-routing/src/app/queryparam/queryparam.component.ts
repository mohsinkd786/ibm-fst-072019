import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-queryparam',
  templateUrl: './queryparam.component.html',
  styleUrls: ['./queryparam.component.css']
})
export class QueryparamComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  params:any
  ngOnInit() {
      this.params= {
        id:  this.route.snapshot.queryParams.id,
        name: this.route.snapshot.queryParams.name
    }
  }
}
