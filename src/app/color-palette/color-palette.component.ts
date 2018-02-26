import {Component, EventEmitter, HostBinding, Input, OnInit, Output} from '@angular/core';
import {ColorInfo} from "../app.component";

@Component({
  selector: 'color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.scss']
})
export class ColorPaletteComponent implements OnInit {
  @Input() name: string;
  @Input('color-list') colorList: ColorInfo[];
  @Output() onSelect = new EventEmitter<ColorInfo>();
  @HostBinding('class.active') active: boolean = false;
  public commonColors: ColorInfo[];
  public rareColors: ColorInfo[];
  public selectedColor: ColorInfo;

  constructor() { }

  ngOnInit() {
    this.commonColors = this.colorList.filter(color => !color.rare);
    this.rareColors = this.colorList.filter(color => color.rare);
    if (!this.selectedColor) {
      this.selectColor(this.commonColors[0]);
    }
  }

  public selectColor(color:ColorInfo): void {
    this.selectedColor = color;
    this.onSelect.emit(color);
  }
}
