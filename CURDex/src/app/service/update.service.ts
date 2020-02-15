import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class UpdateService {
    constructor(private _http: HttpClient) { }

    public uService(obj: any): any {
        var id=obj.pId;
        return this._http.put("http://localhost:8080/update/" + id, obj);
    }
}