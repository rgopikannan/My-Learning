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
     * Constructor for AuthService class
     * @param http
     * @param errorService
     */
    constructor(private http: Http, private errorService: ErrorService) { }

    /**
     * @name: signup handle signup
     * @param user
     * @returns {any|Promise<R>|Promise<T|ErrorObservable>|Promise<ErrorObservable>|Promise<T>}
     */
    signup(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/user', body, { headers: headers }).map((response: Response) => response.json())
            .catch((error: Response) => {
                return Observable.throw(error);
            });
        //TODO3 map response here and handle error
    }

    /**
     * @name signin handle sign in
     * @param user
     * @returns {any|Promise<R>|Promise<T|ErrorObservable>|Promise<ErrorObservable>|Promise<T>}
     */
    signin(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({ 'Content-Type': 'application/json' });
        return this.http.post('http://localhost:3000/user/signin', body, { headers: headers }).map(response => { return response.json(); })
            .catch((error: Response) => {
                //TODO add logic to handle response and error here
                return Observable.throw(error);
            });
        //TODO7 map response here and handle error
    }

    /**
     * @name logout clear local storage
     */
    logout() {
        //TODO clear local storage
    }

    /**
     * @name isLoggedIn check user login
     * @returns {boolean}
     */
    isLoggedIn(): boolean {
        //TODO check is user looged in and return 
    }
}