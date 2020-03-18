import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http"; 


@Injectable()
export class ProductService{
    constructor(private _http:HttpClient){}

    createProduct(arg:any):any{
return this._http.post("http://localhost:8080/create",arg);
    }
}