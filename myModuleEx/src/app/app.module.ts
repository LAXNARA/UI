import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {PageOneComponent} from "./pageone/pageone.component";
import {lazyConst} from "./app.route";
import {RouterModule} from "@angular/router";
import {AuthService} from "./auth.service";

@NgModule({
  declarations: [
    AppComponent,PageOneComponent
  ],
  imports: [
    BrowserModule,RouterModule,lazyConst
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
