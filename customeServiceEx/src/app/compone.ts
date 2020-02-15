import {Component} from "@angular/core";
import {MyService} from "./my.service";
import {MyService2} from "./my.service2";

@Component({
    selector:"compone",
    templateUrl:"./compone.html",
    providers:[MyService,MyService2]
})

export class CompOne{
    private java_data:any;

    constructor(private _service:MyService){}

    ngOnInit(){
       this.java_data=this._service.fun_one();
    }
}