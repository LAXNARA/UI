import {Injectable} from "@angular/core";
import {CanLoad,CanDeactivate} from "@angular/router";
import {PageOneComponent} from "./pageone/pageone.component"
@Injectable()

export class AuthService implements CanLoad,CanDeactivate<PageOneComponent>{
    canLoad():boolean{
        return confirm("Are you sure do you want to open?");
    }
    canDeactivate(): boolean {
        return confirm("Are you sure do you want to close ?");
      }
    
}