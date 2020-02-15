import { Component } from "@angular/core";
import { CountrieService } from "./countrie.service";

@Component({
    selector: "countries",
    templateUrl: "./countrie.html"
})
export class CountrieComponent {
    private data: any;

    constructor(private _countrie: CountrieService) { }

    ngOnInit(): any {
        return this._countrie.getCountrie().subscribe(res => this.data = res,
            err => console.log(err));
    }
}