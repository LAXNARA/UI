import {Injectable} from "@angular/core";

@Injectable()
export class MyService2{
    private var_one:any;
    constructor(){
        this.var_one="data will come from java very soon...";
    }
    public fun_one():any{
        return this.var_one;
    }
}