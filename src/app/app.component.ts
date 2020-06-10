import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {AppService} from './app.service';
import {animate, query, style, transition, trigger} from '@angular/animations';
import {NavigationEnd, Router, RoutesRecognized} from '@angular/router';
import {Subscription} from 'rxjs/Subscription';

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
          style({
            opacity: 0,
            position: 'absolute',
            transform: 'initial',
            width: '100%',
            height: '100%',
            padding: '1rem 1.5rem 2rem',
            top: 0,
            left: 0
          }),
          {optional: true}),

        // move page off screen right on leave
        query(':leave',
          animate('200ms ease-in',
            style({
              opacity: 0,
              position: 'absolute',
              transform: 'initial',
              width: '100%',
              height: '100%',
              padding: '1rem 1.5rem 2rem',
              top: 0,
              left: 0
            })
          ),
          {optional: true}),

        // move page in screen from left to right
        query(':enter',
          animate('200ms ease-out',
            style({
              opacity: 1,
              position: 'absolute',
              transform: 'initial',
              width: '100%',
              height: '100%',
              padding: '1rem 1.5rem 2rem',
              top: 0,
              left: 0
            })
          ),
          {optional: true}),
      ])
    ])
  ]
})

export class AppComponent implements OnInit, OnDestroy {
  public sergalData: SergalPaletteInfo[];
  public aboutToggle: boolean = false;
  public menuToggle: boolean = false;
  public konamiActive: boolean = false;
  public selectedType: string;
  public selectedPalette: 'coat' | 'belly';

  private routerSub: Subscription;

  get selectedCoat(): ColorInfo { return this.appService.selectedCoat; }
  set selectedCoat(colorInfo: ColorInfo) { this.appService.selectedCoat = colorInfo; }
  get selectedBelly(): ColorInfo { return this.appService.selectedBelly; }
  set selectedBelly(colorInfo: ColorInfo) { this.appService.selectedBelly = colorInfo; }

  private get data(): SergalPaletteInfo { return this.appService.getSergal(this.selectedType); }
  get coatColors(): ColorInfo[] { return this.data ? this.data.coatColors : []; }
  get bellyColors(): ColorInfo[] { return this.data ? this.data.bellyColors : []; }
  get eyeColors(): ColorInfo[] { return this.data ? this.data.eyeColors : []; }

  constructor(private appService: AppService,
              private router: Router,
              private cdr: ChangeDetectorRef) {
    this.routerSub = this.router.events.subscribe(event => {
      if (event instanceof RoutesRecognized) {
        this.selectedType = event.state.root.firstChild.paramMap.get('type');
      } else if (event instanceof NavigationEnd) {
        ga('set', 'page', '/sergal-palette' + event.urlAfterRedirects);
        ga('send', 'pageview');
        this.resetColors();
      }
    });
  }

  ngOnInit(): void {
    this.sergalData = this.appService.getSergalList();
    document.addEventListener('keydown', this.closeOnEscape);
  }

  ngOnDestroy(): void {
    document.removeEventListener('keydown', this.closeOnEscape);
    this.routerSub.unsubscribe();
  }

  getRouteAnimation(outlet): string {
    if (!outlet.activated) { return null; }
    return outlet.activated.instance.data.type;
  }

  private resetColors(): void {
    this.selectedCoat = this.coatColors[0];
    this.selectedBelly = this.bellyColors[0];
    this.cdr.markForCheck();
  }

  public isCoatSelected(): boolean { return this.selectedPalette === 'coat'; }
  public isBellySelected(): boolean { return this.selectedPalette === 'belly'; }
  public closePalette(): void { this.selectedPalette = null; }


  private closeOnEscape = (event: KeyboardEvent): void => {
    if (event.code === 'Escape') { this.aboutToggle = false; }
  }

  yay(): void {
    if (!this.konamiActive) {
      this.konamiActive = true;
      setTimeout(() => {
        this.konamiActive = false;
      }, 20000);
    }
  }
}
