import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {CompOne} from "./compone";
import {CompTwo} from "./comptwo";
import {MyService} from "./my.service";

@NgModule({
  declarations: [
    AppComponent,CompOne,CompTwo
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [CompTwo]
})
export class AppModule { }
