import { Http, Response, Headers } from "@angular/http";
import { Injectable, EventEmitter } from "@angular/core";
import 'rxjs/Rx';
import { Observable } from "rxjs";
import {Product}  from './product.model';

/**
 * @ProductService
 * @description
 * this service to handle product
 */

@Injectable()
export class ProductService {

    /**
     * @type {string}
     */
    private productsUrl: string = 'data/products.json';

    /**
     * @type {Product[]}
     */
    public products:Product[];

    /**
     * @type {Product[]}
     */
    myBasket: Product[] = [];

    /**
     * @type {string}
     */
    _currntProductType: string = 'fruits';

   

    /**
     * Constructor for ProductService class
     * @param http
     */
    constructor(private http: Http) {
    }

    /**
     * @param type
     */
    setCurrentProductType(type: string ) {
        this._currntProductType = type;
    }

    /**
     * @returns {string}
     */
    getCurrentProductType(): string {
        return this._currntProductType;
    }

    /**
     * @returns {Product[]}
     */
    public getMyBasket(): Product[]{
        return this.myBasket;
    }


    /**
     * @description add product to basket and update basket details
     * @param product
     */
    addProductToBasket(product: Product){
        //TODO add product to basket and update its details
        // product.basketCount = 1;

        if(!this.myBasket){
            this.myBasket = [];
        }
        var index = this.myBasket.indexOf(product);
        if (index !== -1){
            this.myBasket[index].basketCount++;
        }else{
            if(!product.basketCount){
                product.basketCount = 0;
            }
            product.basketCount++;
            this.myBasket.push(product);
        }
        this.setTotalProductBasketPrice(product);
    }

    removeProductFromBasket(product: Product,index) {        
        this.myBasket.splice(index,1);
    }


    /**
     *
     * @returns {number} tCount
     */
    getTotalBasketQuantity(): number {
        //TODO return total basket quantity
        var tCount:number =0;
        if(this.myBasket){
            this.myBasket.forEach(function(product: Product){
                tCount = tCount + product.basketCount;
            })
        }
        return tCount;
    }

    /**
     * @description reset basket details
     */
    resetBasket() {
        //TODO rest basket here
        if (this.myBasket) {
            this.myBasket.forEach(function (product: Product) {
                product.basketCount = 0;
                product.basketPrice = 0;
            })
        }
        this.myBasket = null;
    }

    /**
     * @param product
     */
    setTotalProductBasketPrice(product: Product) {
        product.basketPrice = product.basketCount * product.price;
    }

    /**
     * @returns {number}
     */
    getTotalPrice(): number {
        //TODO return total price 
        let t = 0;
        this.myBasket.forEach(element => {
            element.basketPrice = element.price;
            t += element.basketPrice;
        });
        return t;
    }

    /**
     * @returns {Observable<Product[]>}
     */
    getProduct(): Observable <Product[]>{
        //TODO get products from productUrl
        return this.http.get(this.productsUrl)
            .map((res:Response) => this.extractProduct(res))
            .catch(this.handleError);
    }

    /**
     * @param res
     * @returns {Product[]}
     */
    private extractProduct(res: Response): Product[] {
        let body = res.json();
        this.products = body.products || { };
        return this.products;
    }

    /**
     * @param error
     * @returns {ErrorObservable}
     */
    private handleError (error: any): Observable<any> {
        //TODO handle and show error
        let errMsg = (error.message):error.message:error.status?
        return Observable.throw(error.message || error);
    }
}