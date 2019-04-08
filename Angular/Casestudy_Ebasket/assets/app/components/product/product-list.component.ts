import { Component, OnInit} from '@angular/core';
import { Router } from "@angular/router";
import { ProductService } from './product.service';
import { ErrorService } from '../../errors/error.service';
import {Product} from './product.model';
import { ProductFilter } from './product.filter';
import { Error } from '../../errors/error.model';
/**
 * @component
 * @description
 * this is to show product list  for different type of products in product detail screen
 */
@Component({
    selector: 'product-list-component',
    templateUrl: './product-list.component.html'

})
export class ProductListComponent implements OnInit {

    /**
     * Constructor for ProductListComponent class
     * @param router
     * @param _productService
     * @param errorService
     */
    constructor(private router: Router,private _productService: ProductService, private errorService: ErrorService){
    }

    /**
     * @type {string}
     */
    searchString: string = '';

    /**
     *
     * @type {string}
     */
    currentProductType: string;

    /**
     *
     * @type {string}
     */
    currentCategory: string;

    /**
     *
     * @type {string}
     */
    totalItems: number = 0;

    /**
     *
     * @type {Product[]}
     */
    fruits: Product[];

    /**
     *
     * @type {Product[]}
     */
    vegetables: Product[];

    /**
     *
     * @type {Product[]}
     */
    grocery: Product[];

    /**
        * @type {string}
        */
    display: string = 'none';

    /**
     * @override OnInit
     */
    ngOnInit(){
        this.getProduct();
        this.totalItems = this._productService.getTotalBasketQuantity();
    }

    /**
     * @description get product and set types of products
     */
    getProduct() {
        //TODO handle response and error here
        this._productService.getProduct().subscribe(
            res => { this.setProducts(res) },
            error => { this.logError(error); }
        );
    }

    /**
     * @description set  products type
     * @param res
     */
    setProducts =  function(res){
        this.fruits = res.fruits;
        this.vegetables = res.vegetables;
        this.grocery = res.grocery;
        this.display = "block";
    }

    /**
     * @description handle error
     * @param error
     */
    logError = function(error) {
        let err= new Error("Server error:","Product list API failed")
        this.errorService.handleError(err);
    }

    /**
     * @returns {Product[]|any}
     */
    getCurrentProductType =  function (): Product{
        this.currentProductType = this._productService.getCurrentProductType();
        this.currentCategory = this.currentProductType.substring(0,1).toUpperCase() + this.currentProductType.substring(1) + " ";
        //TODO return category type object
        let currentProduct = (this.currentProductType == "fruits") ? this.fruits : (this.currentProductType == "vegetables") ? this.vegetables : this.grocery;
        return currentProduct;
    }

    /**
     * @description route to basket screen
     */
    onBasketClicked = function(){
        //TODO handle basket click
        // this.router.navigate(['/', 'basket']);
        let canNavigate = this._productService.getMyBasket() && this._productService.getMyBasket().length > 0;
        this.router.navigate(['/', 'basket', { data: canNavigate }]);
    }

    /**
     * @description add product to basket
     * @param product
     */
    onAddToBasket = function(product: Product){
        //TODO  add product to basket
        this._productService.addProductToBasket(product);
        this.totalItems = this._productService.getTotalBasketQuantity();
    }

}