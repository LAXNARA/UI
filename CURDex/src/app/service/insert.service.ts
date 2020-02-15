import {Injectable} from "@angular/core";
import {HttpClient,HttpResponse} from "@angular/common/http";

@Injectable()

export class InsertService{
    constructor(private _http:HttpClient){}

    public iService(obj:any){
        return this._http.post("http://localhost:8080/create",obj);
    }
}