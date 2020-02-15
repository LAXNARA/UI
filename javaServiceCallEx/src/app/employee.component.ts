import { Component, OnInit } from '@angular/core';
import {JavaService} from "./java.service";

@Component({
  selector: 'employee',
  templateUrl: './employee.component.html'
})
export class EmployeeComponent implements OnInit {

  private data:any;
  constructor(private _service:JavaService) { }

  ngOnInit() {
    return this._service.getEmployeeDetail().subscribe(res=>this.data=res,err=>console.log(err));
  }

}
