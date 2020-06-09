import {Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {ColorInfo} from '../app.component';

@Component({
  selector: 'color-palette',
  templateUrl: './color-palette.component.html',
  styleUrls: ['./color-palette.component.scss']
})
export class ColorPaletteComponent implements OnInit, OnDestroy {
  @Input() name: string = 'Loading...';
  @Input('color-list') colorList: ColorInfo[];
  @Input('selected-color') selectedColor: ColorInfo;
  @Output() onSelect = new EventEmitter<ColorInfo>();
  @Output() onClose = new EventEmitter<void>();
  public commonColors: ColorInfo[];
  public rareColors: ColorInfo[];

  constructor() { }

  ngOnInit(): void {
    this.commonColors = this.colorList.filter(color => !color.rare);
    this.rareColors = this.colorList.filter(color => color.rare);
    if (!this.selectedColor) {
      this.selectColor(this.commonColors[0]);
    }
    document.addEventListener('keydown', this.closeOnEscape);
  }

  ngOnDestroy(): void {
    document.removeEventListener('keydown', this.closeOnEscape);
  }

  public selectColor(color: ColorInfo): void {
    this.selectedColor = color;
    this.onSelect.emit(color);
    this.close();
  }

  public close(): void { this.onClose.emit(); }

  private closeOnEscape = (event: KeyboardEvent): void => {
    if (event.code === 'Escape') { this.close(); }
  }
}
