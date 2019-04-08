import { Pipe, PipeTransform, Injectable } from '@angular/core';

/**
 * @ProductFilter
 * @description
 * product filter
 */

@Pipe({name: 'pfilter', pure: false })
export class ProductFilter implements PipeTransform {

    /**
     * @override transform method of PipeTransform class
     * @param items
     * @param args
     * @returns {any}
     */
    transform(items: any, args:string): any {
        if (items && items.length) {
            //TODO return filter product here
            return items.filter(item => item.name.toLocaleLowerCase().indexOf(args.toLocaleLowerCase()) > -1);
        }
    }
}