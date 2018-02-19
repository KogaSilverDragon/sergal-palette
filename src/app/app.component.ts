import { Component } from '@angular/core';

export interface SergalPaletteInfo {
  name: string;
  type: string;
  eyeColors: ColorInfo[];
  coatColors: ColorInfo[];
  bellyColors: ColorInfo[];
}

export interface ColorInfo {
  id: number;
  rgb: string;
  rare: boolean;
}

const SERGAL_DATA: SergalPaletteInfo[] = [
  {
    name: 'Pure Northen',
    type: 'pure_northen',
    eyeColors: [],
    coatColors: [],
    bellyColors: []
  },
  {
    name: 'Civilized Northen',
    type: 'civilized_northen',
    eyeColors: [],
    coatColors: [],
    bellyColors: []
  },
  {
    name: 'Western',
    type: 'western',
    eyeColors: [],
    coatColors: [],
    bellyColors: []
  },
  {
    name: 'Eastern',
    type: 'eastern',
    eyeColors: [],
    coatColors: [],
    bellyColors: []
  },
  {
    name: 'Pure Southern',
    type: 'pure_southern',
    eyeColors: [],
    coatColors: [],
    bellyColors: []
  },
  {
    name: 'Pure Southern',
    type: 'pure_southern',
    eyeColors: [],
    coatColors: [],
    bellyColors: []
  }
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title: string = 'Sergal Palette';
  sergalData: SergalPaletteInfo[];

  constructor() { }

  ngOnInit() {
    this.sergalData = SERGAL_DATA;
  }
}
