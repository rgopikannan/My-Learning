import {Component, OnInit} from '@angular/core';
import {BillService} from './bill.service';
import {FriendService} from '../friend/friend.service';
import { Bill } from './bill.model';
import { BillFilter } from './bill.filter';
@Component({
    selector: 'bill-list-component',
    templateUrl: './bill-list.component.html'

})
export class BillListComponent implements OnInit {

    bills: Bill[]=[];

    constructor(private billService: BillService, private friendService: FriendService){}

    ngOnInit() {
        this.friendService.onGetFriendSuccess
            .subscribe(
            () => {
                this.getBills();
            }
    );
    }

    getBills() {
        this.billService.getBills()
            .subscribe(
                data =>  this.onGetSucces(data),
                error => this.onGetError(error)
        );
    }

    onGetSucces(bills: Bill[]) {
        this.billService.bills = bills;
        //this.bills = //TODO get bill list from service
    }

    onGetError(error) {
    }
}