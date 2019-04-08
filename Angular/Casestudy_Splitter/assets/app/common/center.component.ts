import { Component } from "@angular/core";
import { AuthService } from "../auth/auth.service";
import { BillService } from "../bill/bill.service";
import { FriendService } from "../friend/friend.service";

@Component({
    selector: 'app-center-component',
    templateUrl: './center.component.html'
})
export class CenterComponent{
    constructor(private authService:AuthService, private billService: BillService, private friendService: FriendService) {
    }

    onAddBill() {
        this.billService.displayAddBill = 'block';
    }
}