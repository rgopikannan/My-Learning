import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import {ProductService} from "../components/product/product.service";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";

@Injectable()
export class CanActivateGuard implements CanActivate {

	/**
     * @override canActivate
     * @param route {ActivatedRouteSnapshot}
     * @param state {RouterStateSnapshot}
     * @returns {Observable | boolean}
     */
    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot):Observable<boolean>|boolean {
        let params: any = route.params;
        // console.log('canActivate:   '+JSON.stringify(params));
        if (params && eval(params.data)) {
            return true;
        }
        else {
            //TODO show error on browser
            return false;
        }
    }
}