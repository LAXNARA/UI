import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import {NodeComponent} from "./static.component";
import {NodeService} from "./nodeservice";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,NodeComponent
  ],
  imports: [
    BrowserModule,HttpClientModule
  ],
  providers: [NodeService],
  bootstrap: [NodeComponent]
})
export class AppModule { }
