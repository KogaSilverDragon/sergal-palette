import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SergalDetailComponent} from "./sergal-detail/sergal-detail.component";

const routes: Routes = [
  { path: '*', redirectTo: 'pure-northern', pathMatch: 'full' },
  { path: '', redirectTo: 'pure-northern', pathMatch: 'full' },
  { path: ':type', component: SergalDetailComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
