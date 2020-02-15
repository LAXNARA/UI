import {Injectable} from "@angular/core";
import {HttpResponse,HttpClient} from "@angular/common/http";

@Injectable()
export class CountrieService{
    constructor(private _http:HttpClient){}

    public getCountrie():any{
        return this._http.get("http://restcountries.eu/rest/v2/all");
    }
}