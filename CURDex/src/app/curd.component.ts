import { Component } from "@angular/core";
import { InsertService } from "../app/service/insert.service";
import { ReadService } from "../app/service/read.service";
import { UpdateService } from "../app/service/update.service";
import { DeleteService } from "../app/service/delete.service";

import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

@Component({
    selector: "curd",
    templateUrl: "./curd.component.html"
})
export class CURDComponent {
    private getAllVar: any;
    private insert: Object;
    private update: any;
    private delete: any;
    constructor(private _iService: InsertService,
        private _rService: ReadService,
        private _uService: UpdateService,
        private _dService: DeleteService) { }

       
    ngOnInit():any {
       return this._rService.rService().subscribe(res => this.getAllVar = res,
            err => console.log(err));
    }
    saveProduct(obj:any){
        this._iService.iService(obj).subscribe(res => this.insert =res,
                                                err=>console.log(err));
    }
    updateProduct(obj:any){
        this._uService.uService(obj).subscribe(res=>this.update=res,
                                               err=>console.log(err));
    }
    deleteProduct(id){
        this._dService.dService(id).subscribe(res=>this.delete=res,
                                              err=>console.log(err));
    }
}