import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {JavaService} from "./java.service";
import {EmployeeComponent} from "./employee.component";
import {HttpClientModule} from "@angular/common/http"
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,EmployeeComponent
  ],
  imports: [
    BrowserModule,HttpClientModule,FormsModule
  ],
  providers: [JavaService],
  bootstrap: [EmployeeComponent]
})
export class AppModule { }
