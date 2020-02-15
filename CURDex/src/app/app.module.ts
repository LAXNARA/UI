import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { CURDComponent } from "./curd.component";
import { DeleteService } from "./service/delete.service";
import { InsertService } from "./service/insert.service";
import { UpdateService } from "./service/update.service";
import { ReadService } from "./service/read.service";

import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    CURDComponent
  ],
  imports: [
    BrowserModule, HttpClientModule, FormsModule
  ],
  providers: [DeleteService, InsertService, UpdateService, ReadService],
  bootstrap: [CURDComponent]
})
export class AppModule { }
