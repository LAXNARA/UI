import {Injectable} from "@angular/core";
import {HttpResponse,HttpClient} from "@angular/common/http";

@Injectable()
export class CountrieService{
    constructor(private _http:HttpClient){}

    public getCountrie():any{
        return this._http.get("http://localhost:8080/getAll");
    }
   // http://localhost:8080/getAll
    public rService():any{
        this._http.get("http://restcountries.eu/rest/v2/all");
    }
    public createProduct(arg:any):any{
return this._http.post("http://localhost:8080/create",arg);
    }
}