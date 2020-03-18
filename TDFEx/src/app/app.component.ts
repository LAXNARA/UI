import { Component } from '@angular/core';
import {ProductService} from "./product.service"
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  [x: string]: any;
  constructor(private _productService:ProductService){}
  title = 'TDFEx';
  
  addProduct(arg:JSON){
    console.log(arg);
    this._productService.createProduct(arg).subscribe(res=>this.responseStatus=res,
                                                        err=>console.log(err));
  }

  register(data:any){
    console.log(data);
  }
  
}
