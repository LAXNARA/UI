import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";

@Injectable()
export class JavaService{

    constructor(private _http:HttpClient){}

    public getEmployeeById(id:String):any{
        return this._http.get("http://localhost:8080/employee/"+id);
    }

    public createEmployee(args:JSON):any{
        return this._http.post("http://localhost:8080/employee/create",args);
    }

}