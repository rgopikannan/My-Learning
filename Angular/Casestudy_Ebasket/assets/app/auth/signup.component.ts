import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { User } from "./user.model";
import { ErrorService } from "../errors/error.service";
import { Error } from "../errors/error.model";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styles: [`
    .form-container > *{
        margin: 0 0 5px 0;
    }
    `]
})
export class SignupComponent implements OnInit {

    /**
     * @type {FormGroup}
     */
    signUpForm: FormGroup;

    formInvalid:Boolean= false;
    /**
     * Constructor for SignUpComponent class
     * @param authService
     * @param router
     */
    constructor(private authService: AuthService, private router: Router, private errorService: ErrorService) {
        this.errorService.clearError();
    }

    /**
     * @name  onSubmit handle signup
     */
    onSubmit() {
        const user = new User(
            this.signUpForm.value.email,
            this.signUpForm.value.password,
            this.signUpForm.value.userName
        );
            
        if(this.signUpForm.valid){
            //TODO handle response and navigate to sign in  and handle error
            this.authService.signup(user)
                .subscribe(res => { this.signinSuccess(res); },
                    err => { this.logError(err); }
                );
            this.signUpForm.reset();
        }
        else {
            this.formInvalid = true;
        }
    }

    signinSuccess = function (res) {
        if (res && res.status == 200 ){
            this.router.navigate(['/', 'signin']);
        }
    }

    /**
     * @name logError handle error
     * @param error
     */
    logError = function (error) {
        //TODO hande error
        let err: Error = new Error(error.json().title, error.json().error);
        this.errorService.handleError(err);
    }

    /**
     * @override OnInit lifecycle method
     */
    ngOnInit() { 
        let emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+[.][a-z]{2,8}$";
         //TODO add userName, email and password validators here
        this.signUpForm = new FormGroup({            
            userName: new FormControl('', [Validators.required,Validators.minLength(8),Validators.maxLength(20)]),
            email: new FormControl('', [Validators.required, Validators.pattern(emailPattern)]),
            password: new FormControl('', [Validators.required, Validators.minLength(6)])
        });
    }
}