import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {SeriesCallComponent} from "./components/seriescall.component"
import {CountrieService} from "./services/countrie.service";
import {ProductService} from "./services/product.service";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,SeriesCallComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [ProductService,CountrieService],
  bootstrap: [SeriesCallComponent]
})
export class AppModule { }
