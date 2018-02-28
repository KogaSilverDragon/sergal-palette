import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SergalListComponent } from './sergal-list/sergal-list.component';
import { SergalDetailComponent } from './sergal-detail/sergal-detail.component';
import { ColorPaletteComponent } from './color-palette/color-palette.component';
import { AppRoutingModule } from './app-routing.module';
import {RouteReuseStrategy} from "@angular/router";
import {CustomReuseStrategy} from "./custom-reuse-strategy";
import {AppService} from "./app.service";
import {KonamiModule} from "ngx-konami/dist";


@NgModule({
  declarations: [
    AppComponent,
    SergalListComponent,
    SergalDetailComponent,
    ColorPaletteComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    KonamiModule
  ],
  providers: [
    {provide: RouteReuseStrategy, useClass: CustomReuseStrategy},
    AppService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
