import {Component, Input, OnInit} from '@angular/core';
import {ColorInfo} from "../app.component";

@Component({
  selector: 'color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.scss']
})
export class ColorPaletteComponent implements OnInit {
  @Input() name: string;
  @Input('color-list') colorList: ColorInfo[];
  public commonColors: ColorInfo[];
  public rareColors: ColorInfo[];
  public selectedColor: ColorInfo;

  constructor() { }

  ngOnInit() {
    this.commonColors = this.colorList.filter(color => !color.rare);
    this.rareColors = this.colorList.filter(color => color.rare);
  }

  public selectColor(color:ColorInfo): void { this.selectedColor = color; console.log(color) }
}
