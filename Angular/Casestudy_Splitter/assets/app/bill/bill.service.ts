import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";

import { Bill } from "./bill.model";
import { ErrorService } from "../errors/error.service";

@Injectable()
export class BillService {

    public displayAddBill:string = 'none';

    public bills: Bill[] = [];

    constructor(private http: Http, private errorService: ErrorService) {
    }

    getBillList(): Bill[] {
        return this.bills;
    }

    setBillList(bill: Bill) {
        this.bills.push(bill);
    }

    addBill(bill: Bill) {
        const body = JSON.stringify(bill);
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
         //TODO handle response and error here
        return this.http.post('http://localhost:3000/bill' + token, body, { headers: headers }).map(res => this.onAddBillSuccess(res)).catch(error => { return Observable.throw(error.message || error); });
    }

    onAddBillSuccess (response) {
        const result = response.json();
        const bill = new Bill(
            result.obj.desc,
            result.obj.amt,
            result.obj.billDate,
            result.obj.email,
            result.obj.userName,
            result.obj.userId,
            result.obj.paidByYou,
            result.obj.splitEqually
        );
        return bill;
    }

    getBills() {
        const headers = new Headers({'Content-Type': 'application/json'});
        const token = localStorage.getItem('token')
            ? '?token=' + localStorage.getItem('token')
            : '';
             //TODO handle response and error here
        return this.http.get('http://localhost:3000/bill' + token, { headers: headers }).map(res => { return res; }).catch(error => {return Observable.throw(error.message || error);});
    }
}