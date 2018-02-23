import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import 'rxjs/add/operator/switchMap';
import {SergalPaletteInfo} from "../app.component";
import {AppService} from "../app.service";

@Component({
  selector: 'sergal-detail',
  templateUrl: './sergal-detail.component.html',
  styleUrls: ['./sergal-detail.component.scss']
})
export class SergalDetailComponent implements OnInit {
  type: string = '';
  data: SergalPaletteInfo;
  constructor(private route: ActivatedRoute,
              private appService: AppService) { }

  ngOnInit() {
    this.type = this.route.snapshot.paramMap.get('type');
    this.data = this.appService.getSergal(this.type);
  }

}
