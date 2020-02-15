import {Component} from "@angular/core";
@Component({
    templateUrl:"./pageone.component.html"
})
export class PageOneComponent{
    private var_one:String;
    constructor(){
        this.var_one="Hey, you are in page one";
    }
}