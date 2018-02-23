import {Component, Input, OnInit} from '@angular/core';
import {SergalPaletteInfo} from "../app.component";

@Component({
  selector: 'sergal-list',
  templateUrl: './sergal-list.component.html',
  styleUrls: ['./sergal-list.component.scss']
})
export class SergalListComponent implements OnInit {
  @Input() data: SergalPaletteInfo[];
  public closed: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
