import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SergalListComponent } from './sergal-list/sergal-list.component';
import { SergalDetailComponent } from './sergal-detail/sergal-detail.component';
import { ColorPaletteComponent } from './color-palette/color-palette.component';
import { AppRoutingModule } from './app-routing.module';
import {RouteReuseStrategy} from "@angular/router";
import {CustomReuseStrategy} from "./custom-reuse-strategy";


@NgModule({
  declarations: [
    AppComponent,
    SergalListComponent,
    SergalDetailComponent,
    ColorPaletteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    {provide: RouteReuseStrategy, useClass: CustomReuseStrategy}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
