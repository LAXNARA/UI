import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class ReadService{
    constructor(private _http:HttpClient){}

    public rService():any{
        this._http.get("http://localhost:8080/getAll");
    }
}