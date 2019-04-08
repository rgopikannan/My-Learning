import { Pipe, PipeTransform, Injectable } from '@angular/core';
import {Friend} from '../friend/friend.model';


@Pipe({name: 'billfilter', pure: false })
export class BillFilter implements PipeTransform {
    transform(items: any, args:Friend): any {
        if(items && items.length){
            //TODO Add filter logic here
        }
    }
}