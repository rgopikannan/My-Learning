import {Component, OnInit} from '@angular/core';
import {Friend} from './friend.model';
import {FriendService} from './friend.service';
import {AuthService} from '../auth/auth.service';
import {ErrorService} from '../errors/error.service';
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { EventEmitter } from "@angular/core";

@Component({
    selector: 'friend-list-component',
    templateUrl: 'friend-list.component.html'
})
export class FriendListComponent implements OnInit{

    friends: Friend[];

    display = 'none';

    addFriendForm: FormGroup;

    constructor(private friendService: FriendService, private errorService: ErrorService, private authService: AuthService){}

    ngOnInit (){
        this.addFriendForm = new FormGroup({
            //TODO add email, message. lName and fName control here
            fName: new FormControl(null, Validators.required),
            lName: new FormControl(null, Validators.required),
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            message: new FormControl(null)
        });

        this.getFriends();

    }

    getFriends() {
        this.friendService.getFriends()
            .subscribe(res => { this.onGetSucces(res.json().obj);},
            err => { this.onGetError(err)}
                // TODO handle frends response and error here
        );
    }

    onGetSucces(friends: Friend[]) {
        this.friendService.friends = friends;
        this.friends = this.friendService.getFriendList();
        this.onClose();
    }

    onGetError(error) {
        this.onClose();
    }

    onClose () {
        this.display = 'none';
    }

    onFreindSelect (friend: Friend) {
        this.friendService.selectedFriend = friend
    }

    onAddUser () {
        this.display = 'block';
    }

    private cFriend;
    onSubmit() {
        const friend = new Friend(
            this.addFriendForm.value.fName,
            this.addFriendForm.value.lName,
            this.addFriendForm.value.email,
            localStorage.getItem('userName'),
            localStorage.getItem('userId'),
            this.addFriendForm.value.message
        );
        
       

        this.friendService.addFriend(friend)
            .subscribe(
                (res) => {this.onAddSucces(res);},
                error => {this.onAddError(error);}
        );
    }

    onAddSucces(friend: Friend) {
        console.log(friend+'   onAddSucces..   ' + JSON.stringify(friend));
        if (friend){
            this.friendService.setFriendList(friend);
            this.friends = this.friendService.getFriendList();
            this.onClose();
        }
    }

    onAddError(error) {
        this.onClose();
    }

}