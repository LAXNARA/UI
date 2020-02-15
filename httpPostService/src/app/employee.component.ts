import {Component} from "@angular/core";
import {JavaService} from "./java.service";

@Component({
    selector:"post-service",
    templateUrl:"employee.component.html"
})

export class EmployeeComponent{
    result: any;
    result1: any;
    constructor(private _httpService:JavaService){}

    clickMe(id:String){
        return this._httpService.getEmployeeById(id).subscribe(res=>this.result=res,
                                                               err=>console.log(err));
    }
    createEmployee(args:JSON){
        return this._httpService.createEmployee(args).subscribe(res=>this.result1=res,
                                                                err=>console.log(err))

    }
}