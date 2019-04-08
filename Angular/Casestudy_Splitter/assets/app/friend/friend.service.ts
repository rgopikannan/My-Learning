import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Friend } from "./friend.model";
import { ErrorService } from "../errors/error.service";

@Injectable()
export class FriendService {

    onGetFriendSuccess = new EventEmitter<Friend>();

    public friends: Friend[] = [];

    public selectedFriend: Friend;

    constructor(private http: Http, private errorService: ErrorService) {
    }

    getFriendList(): Friend[] {
        console.log(JSON.stringify(this.friends));
        return this.friends;
    }

    setFriendList(friend: Friend) {
        this.friends.push(friend);
        console.log('setFriendList...  '+JSON.stringify(this.friends));
    }

    addFriend(friend: Friend) {
        //TODO handle response and error here
        const body = JSON.stringify(friend);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        return this.http.post('http://localhost:3000/friend' + token, body, { headers: headers }).map(this.onAddFriendSuccess).catch((error:Response)=> {
            return Observable.throw(error);
        });
    }

    onAddFriendSuccess (response) {
        const result = response.json();
        const friend = new Friend(
            result.obj.fName,
            result.obj.lName,
            result.obj.email,
            result.obj.userName,
            result.obj.userId,
            result.obj.message
        );
        return friend;
    }

    getFriends() {
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
        //TODO handle response and error here
        return this.http.get('http://localhost:3000/friend' + token, { headers: headers })
            .map(response => { return response;})
            .catch((error: Response) => {
                //TODO add logic to handle response and error here
                return Observable.throw(error);
            });
    }
}