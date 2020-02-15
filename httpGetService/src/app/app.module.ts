import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {CountrieComponent} from "./countrie.component";
import {CountrieService} from "./countrie.service";

import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,CountrieComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [CountrieService],
  bootstrap: [CountrieComponent]
})
export class AppModule { }
