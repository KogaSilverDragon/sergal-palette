import { Component } from '@angular/core';
import {AppService} from "./app.service";

export interface SergalPaletteInfo {
  name: string;
  type: string;
  eyeColors: ColorInfo[];
  coatColors: ColorInfo[];
  bellyColors: ColorInfo[];
}

export interface ColorInfo {
  id: number;
  color: string;
  rare: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  public sergalData: SergalPaletteInfo[];
  public aboutToggle: boolean = false;

  constructor(private appService: AppService) { }

  ngOnInit() {
    this.sergalData = this.appService.getSergalList();
  }
}
