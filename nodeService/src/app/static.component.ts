import {Component} from "@angular/core";
import {NodeService} from "./nodeservice";

@Component({
    selector:"node-service",
    templateUrl:"static.component.html"
})
export class NodeComponent{
    result: any;

    constructor(private _service:NodeService){}

    ngOnInit(){
        return this._service.getAllStaticData().subscribe(res=>this.result=res,err=>console.log(err))
    }
}