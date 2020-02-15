import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class NodeService {
    constructor(private _http: HttpClient) { }

    public getAllStaticData(): any {
        return this._http.get("http://localhost:8080/static");
    }
}