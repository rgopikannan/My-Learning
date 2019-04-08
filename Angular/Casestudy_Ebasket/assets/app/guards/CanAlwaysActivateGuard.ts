import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class CanAlwaysActivateGuard implements CanActivate {

    /**
     * override canActivate
     * @returns {boolean}
     */
    canActivate() {       
        //TODO return  value for routes
        return true;
    }
}