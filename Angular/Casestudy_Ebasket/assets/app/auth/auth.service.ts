import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { User } from "./user.model";
import { ErrorService } from "../errors/error.service";

/**
 * @name AuthService handle signup, signIn and logout
 */
@Injectable()
export class AuthService {

    /**
     * @type {any}
     * @default {}
     */
    private _currentUser:any = {};

    /**
     * Constructor for AuthService class
     * @param http
     * @param errorService
     */
    constructor(private http: Http, private errorService: ErrorService) {
        this.errorService.clearError();
    }

    /**
     * @name: signup handle signup
     * @param user
     * @returns {any|Promise<R>|Promise<T|ErrorObservable>|Promise<ErrorObservable>|Promise<T>}
     */
    signup(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/user', body, { headers: headers }).map(res => {return res})
            .catch(this.handleErrorObservable);
            //TODO map response here and handle error
    }

    /**
     * @name signin handle sign in
     * @param user
     * @returns {any|Promise<R>|Promise<T|ErrorObservable>|Promise<ErrorObservable>|Promise<T>}
     */
    signin(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/user/signin', body, { headers: headers }).map(this.extractData)
        .catch(this.handleErrorObservable);
            //TODO map response here and handle error
    }

    private extractData(res: Response) {
        if (res && res.status == 200 && res.json().token) {
            // store user details and jwt token in local storage to keep user logged in between page refreshes
            this._currentUser = res.json();
            // console.log('signin extractData..  ' + JSON.stringify(this._currentUser));
        }
        return res;
    }

    handleErrorObservable(error: Response | any) {
        return Observable.throw(error.message || error);
    } 
    
    /**
     * @name logout clear local storage
     */
    logout() {
        //TODO clear local storage
        this._currentUser = {};
    }

    /**
     * @name isLoggedIn check user login
     * @returns {boolean}
     */
    isLoggedIn(): boolean {
        //TODO check is user looged in and return       
        if (this._currentUser && this._currentUser.token){
            return true;
        }   
        return false;
    }
}