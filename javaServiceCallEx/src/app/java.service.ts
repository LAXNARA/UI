import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable()
export class JavaService {

  constructor(private _http:HttpClient) { }

  public getEmployeeDetail():any{
    return this._http.get("http://localhost:8080/employees");
  }
}
