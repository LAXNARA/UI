import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from "@angular/forms";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MDFEx';

  public userDetail:FormGroup;

  constructor(){
    this.userDetail=new FormGroup({
      fname:new FormControl("",[Validators.required,Validators.minLength(5),Validators.maxLength(9)]),
      lname:new FormControl(),
      uemail:new FormControl(),
      address:new FormGroup({
        city:new FormControl(),
        addr:new FormControl(),
        sex:new FormControl(),
        country:new FormControl()
      })
    });
  }
public createUserDetail(){
  console.log(this.userDetail.value);
}

}
