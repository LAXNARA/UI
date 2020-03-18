import { Component } from "@angular/core";
import { CountrieService } from "./countrie.service";

@Component({
    selector: "countries",
    templateUrl: "./countrie.html"
})
export class CountrieComponent {
    private data: any;
    data1: string;

    constructor(private _countrie: CountrieService) { }

    ngOnInit() {
        this._countrie.getCountrie().subscribe(res => this.data = res,
            err => console.log(err));
    }
    public saveRecord(arg: JSON) {
        return this._countrie.createProduct(arg).subscribe((res:string) =>{
            this.data.push(arg);
            alert("Product Added successfully..."); 
            this.data1 = res;
             
             console.log(this.data1);
             //console.log("Here.."+this.data1);
            // if(this.data1 == "Success"){
              //  this.data.push(arg);
             //}
        }
            , err => console.log(err));
    }
}