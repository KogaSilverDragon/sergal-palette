import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'sergal-detail',
  templateUrl: './sergal-detail.component.html',
  styleUrls: ['./sergal-detail.component.scss']
})
export class SergalDetailComponent implements OnInit {
  type: string = '';
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.type = this.route.snapshot.paramMap.get('type');
  }

}
