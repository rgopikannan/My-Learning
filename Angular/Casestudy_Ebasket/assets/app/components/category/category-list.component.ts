import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Category } from "./category.model";
import { CategoryService } from "./category.service";
import { AuthService } from "../../auth/auth.service";
import { ErrorService } from "../../errors/error.service";
import { Error } from "../../errors/error.model";

/**
 * @component
 * @description
 * handle different category list
 */
@Component({
    selector: 'category-list-component',
    templateUrl: './category-list.component.html'
})
export class CategoryListComponent implements OnInit {
    /**
     * @type  {Category[]}
     */
    categories: Category [];

    /**
     * Constructor for CategoryListComponent class
     * @param _categoryService
     * @param _authService
     * @param errorService
     * @param router
     */
    constructor(private _categoryService: CategoryService, private _authService: AuthService, private errorService: ErrorService, private router: Router ) {
        this.errorService.clearError();
    }

    /**
     * @override ngOnIit and get category if user logged in or navigate to signin
     */
    ngOnInit() {
        if(this._authService.isLoggedIn()){
            this.getCategory();
        }else{
            this.router.navigate(['/', 'signin']);
        }       
    }

    /**
     * @name get category data
     */
    getCategory() {
        this._categoryService.getCategory().subscribe(
            //TODO handle response and error here
            categoryList => { this.categories = categoryList; },
            error => {this.logError(error);}
        );
    }
;
    /**
     * @name logError handle error
     * @param error
     */
    logError = function(error) {
        //TODO hande error
        let err = new Error("Server Error:", "Category list API failed");
        this.errorService.handleError(err);
    }
}