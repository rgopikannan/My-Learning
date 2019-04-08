import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";

import { User } from "./user.model";
import { AuthService } from "./auth.service";
import { ErrorService } from "../errors/error.service";
import { Error } from "../errors/error.model";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html',
    styles:[`
    .form-container > *{
        margin: 0 0 5px 0;
    }
    `]
})
export class SigninComponent implements OnInit {

    /**
     * @type {FormGroup}
     */
    signInForm: FormGroup;

    /**
     * Constructor for SignInComponent class
     * @param authService
     * @param router
     */
    constructor(private authService: AuthService, private router: Router, private errorService: ErrorService) {
        this.errorService.clearError();
    }

    /**
     * @name  onSubmit handle signin
     */
    onSubmit() {        
        const user = new User(this.signInForm.value.email, this.signInForm.value.password);
        //TODO handle response data  and error here 
        this.authService.signin(user)
            .subscribe(res => {this.signinHandler(res);},
            err => {this.logError(err);}
            );
        this.signInForm.reset();
    }

    signinHandler = function (res) {       
        this.router.navigate(['/', 'home']);
    }

    /**
     * @name logError handle error
     * @param error
     */
    logError = function (error) {
        //TODO hande error
        let err: Error = new Error(error.json().title, error.json().error.message);        
        this.errorService.handleError(err);
    }

    /**
     * @name onSignUp navigate to sign up screen
     */
    onSignUp() {
        this.router.navigate(['/', 'signup']);
    }

    /**
     * @override OnInit lifecycle method
     */
    ngOnInit() {
        //TODO add email and password validator here
        let emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+[.][a-z]{2,8}$";
        this.signInForm = new FormGroup({
            email: new FormControl('', [
                Validators.required,
                Validators.pattern(emailPattern)
            ]),
            password: new FormControl('',[Validators.required, Validators.minLength(6)])
        });
    }
}