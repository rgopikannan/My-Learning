import {Component, Input, OnInit} from '@angular/core';
import {Bill} from './bill.model';
@Component({
    selector: 'bill-component',
    templateUrl: './bill.component.html'

})
export class BillComponent implements OnInit{

    @Input() bill: Bill;

    private billDate: Number;

    private billMonth: string = '';

    constructor(){}

    ngOnInit () {
        if(this.bill) {
            var _billDate = new Date(this.bill.billDate);
            this.billDate = _billDate.getDate();
            this.billMonth = _billDate.toLocaleString('en-us', {month: 'short'});
        }
    }
}