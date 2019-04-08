import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class LoggedInAuthGuard implements CanActivate {

	/**
     * @constructor for LoggedInAuthGuard
     * @param authService
     */
    constructor(private authService: AuthService) {}

	 /**
     * @override canActivate
     * @returns {boolean}
     */
    canActivate() {
        //TODO check if user is logged in or not
        return this.authService.isLoggedIn();
    }
}