import {Injectable} from "@angular/core";
import {MyService2} from "./my.service2"

@Injectable()
export class MyService extends MyService2{
   
    private var_two:any;
    constructor(private _service:MyService2){
        super();
        this.var_two="data will come from dot net very soon....";
    }
    public fun_one():any{
        return this._service.fun_one();
    }
    public fun_two():String{
        return this.var_two;
    }
}