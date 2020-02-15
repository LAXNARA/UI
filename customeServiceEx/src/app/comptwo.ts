import {Component} from "@angular/core";
import {MyService} from "./my.service";
import {MyService2} from "./my.service2";

@Component({
    selector:"comptwo",
    templateUrl:"comptwo.html",
    providers:[MyService,MyService2]
})
export class CompTwo{
    private dot_net_data:any;
    constructor(private _service:MyService){}
    ngOnInit():any{
       return this.dot_net_data=this._service.fun_two();
    }

}