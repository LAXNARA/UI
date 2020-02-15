import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class DeleteService{
constructor(private _http:HttpClient){}

public dService(id:any):any{
    return this._http.delete("http://localhost:8080/delete/"+id);
}
}