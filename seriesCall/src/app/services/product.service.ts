import {Injectable} from "@angular/core";

import {HttpClient} from "@angular/common/http";

@Injectable()
export class ProductService{
    constructor(private _http:HttpClient){}

    public getAllProduct():any{
        return this._http.get("http://localhost:8080/getAll");
    }
}