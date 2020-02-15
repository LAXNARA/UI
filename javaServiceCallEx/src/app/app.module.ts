import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EmployeeComponent } from './employee.component';
import {JavaService} from "./java.service";
import {HttpClientModule} from "@angular/common/http"
import {JavaModule} from "./java.module";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,JavaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
