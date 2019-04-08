import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";

import { AuthService } from "./auth.service";
import { Router } from "@angular/router";
import { User } from "./user.model";

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html'
})
export class SignupComponent implements OnInit {

    /**
     * @type {FormGroup}
     */
    signUpForm: FormGroup;

    formInvalid: Boolean = false;

    /**
     * Constructor for SignUpComponent class
     * @param authService
     * @param router
     */
    constructor(private authService: AuthService, private router: Router) { }

    /**
     * @name  onSubmit handle signup
     */
    onSubmit() {
        const user = new User(
            this.signUpForm.value.email,
            this.signUpForm.value.password,
            this.signUpForm.value.userName
        );

        if (this.signUpForm.valid) {
            this.authService.signup(user)
                .subscribe(
                    //TODO2 handle response and navigate to sign in  and handle error
                    res => { this.signinSuccess(res); },
                    err => { this.logError(err); }
                );
            this.signUpForm.reset();
        }
        else {
            this.formInvalid = true;
        }
    }

    signinSuccess = function (res) {
        this.router.navigate(['/', 'signin']);
    }

    logError = function (error) {
        let err: Error = new Error(error.json().title, error.json().error);
        this.errorService.handleError(err);
    }

    /**
     * @override OnInit lifecycle method
     */
    ngOnInit() {
        let emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+[.][a-z]{2,8}$";
        this.signUpForm = new FormGroup({
            //TODO1 add userName, email and password validators here
            userName: new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
            email: new FormControl('', [Validators.required, Validators.pattern(emailPattern)]),
            password: new FormControl('', [Validators.required, Validators.minLength(6)])
        });
    }
}