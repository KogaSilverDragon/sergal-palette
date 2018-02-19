import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {SergalDetailComponent} from "./sergal-detail/sergal-detail.component";

const routes: Routes = [
  { path: 'sergal', redirectTo: '', pathMatch: 'full' },
  {
    path: 'sergal',
    children: [
      { path: ':type', component: SergalDetailComponent }
    ]
  }
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
