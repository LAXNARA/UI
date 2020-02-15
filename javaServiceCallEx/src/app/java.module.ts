import {CommonModule} from "@angular/common";
import {NgModule} from "@angular/core";

import {EmployeeComponent} from "./employee.component";
import { JavaService } from "./java.service";

@NgModule({
    declarations:[EmployeeComponent],
    imports:[CommonModule],
    providers:[JavaService],
    exports:[EmployeeComponent]
})

export class JavaModule{}