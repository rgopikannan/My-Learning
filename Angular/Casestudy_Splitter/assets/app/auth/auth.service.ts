import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { User } from "./user.model";
import { ErrorService } from "../errors/error.service";

@Injectable()
export class AuthService {
    constructor(private http: Http, private errorService: ErrorService) {}

    _userName: string;

    signup(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});  
        return this.http.post('http://localhost:3000/user', body, {headers: headers})
            .map((response: Response) => response.json())
            .catch((error: Response) => {
                //TODO add logic to handle response and error here
                return Observable.throw(error);
            });
    }

    signin(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this.http.post('http://localhost:3000/user/signin', body, {headers: headers})
            .map(response => { return response.json();})
            .catch((error: Response) => {
                //TODO add logic to handle response and error here
                return Observable.throw(error);
            });

    }

    setLoggedInUserName(userName: string) {
        this._userName = userName;
    }

    getLoggedInUserName():string {
        return this._userName;
    }

    logout() {
        //TODO add logic to clear localStorage data
        localStorage.clear();
    }

    isLoggedIn() {
        return localStorage.getItem('token') !== null;
    }
}