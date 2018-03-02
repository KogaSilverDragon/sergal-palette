import { Component } from '@angular/core';
import {AppService} from "./app.service";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  query,
} from '@angular/animations';
import {NavigationEnd, Router} from "@angular/router";

declare let ga: Function;

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
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('routerAnimation', [
      transition('* <=> *', [
        // Initial state of new route
        query(':enter',
          style({ transform: 'translateX(-100%)' }),
          {optional:true}),

        // move page off screen right on leave
        query(':leave',
          animate('200ms ease-in',
            style({ transform: 'translateX(100%)' })
          ),
          {optional:true}),

        // move page in screen from left to right
        query(':enter',
          animate('200ms ease-out',
            style({ transform: 'translateX(0%)' })
          ),
          {optional:true}),
      ])
    ])
  ]
})

export class AppComponent {
  public sergalData: SergalPaletteInfo[];
  public aboutToggle: boolean = false;
  public konamiActive: boolean = false;

  constructor(private appService: AppService,
              public router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        ga('set', 'page', '/sergal-palette' + event.urlAfterRedirects);
        ga('send', 'pageview');
      }
    });
  }

  ngOnInit() {
    this.sergalData = this.appService.getSergalList();
  }

  getRouteAnimation(outlet) {
    if (!outlet.activated) { return null; }
    return outlet.activated.instance.data.type;
  }

  yay(){
    if (!this.konamiActive) {
      this.konamiActive = true;
      setTimeout(() => {
        this.konamiActive = false;
      }, 20000);
    }
  }
}
