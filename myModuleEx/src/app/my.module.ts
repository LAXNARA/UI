import {NgModule} from "@angular/core";
import {DemoComponent} from "./demo/demo.component";
import {CommonModule} from "@angular/common";

import {Routes} from "@angular/router";
import {RouterModule} from "@angular/router";

export const myRoute:Routes=[
    {path:"",component:DemoComponent}
]

@NgModule({
declarations:[DemoComponent],
imports:[CommonModule,RouterModule.forChild(myRoute)],
providers:[],
exports:[DemoComponent]
})
export class MyModule{}