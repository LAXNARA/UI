
import {Routes} from "@angular/router";
import {RouterModule} from "@angular/router";
import {ModuleWithProviders} from "@angular/core";

import {PageOneComponent} from "./pageone/pageone.component";
import {MyModule} from "./my.module";
import {AuthService} from "./auth.service"

export const appRoutes:Routes=[
    {path:"page-one",component:PageOneComponent,canDeactivate:[AuthService]},
    {
        path:"lazy",loadChildren:"./my.module#MyModule",canLoad:[AuthService]
    }
];

export const lazyConst:ModuleWithProviders=RouterModule.forRoot(appRoutes);