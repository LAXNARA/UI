import { Component } from "@angular/core";

import { CountrieService } from "../services/countrie.service"
import { ProductService } from "../services/product.service";

import { Observable } from 'rxjs';

@Component({
    selector: "series-call",
    templateUrl: "./seriescall.component.html"
})
export class SeriesCallComponent {
    data_1: any;
    data_2: any;
    constructor(private _countrieService: CountrieService,
        private _productService: ProductService) { }

    ngOnInit() {
        /* this._productService.getAllProduct().subscribe(res =>{
             this.data_1 = res;
             this._countrieService.getCountries().subscribe(res1=>this.data_2=res1,
                 err=>console.log(err));
         }
             , err =>{
                 console.log(err) 
             })*/

        let product = this._productService.getAllProduct();
        let countrie = this._countrieService.getCountries();
        Observable.forkJoin([product, countrie]).subscribe(res => {
            this.data_1 = res[0];
            this.data_2 = res[1];
        })
    }

}