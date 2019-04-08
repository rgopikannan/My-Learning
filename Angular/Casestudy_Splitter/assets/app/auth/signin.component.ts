import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { User } from "./user.model";
import { AuthService } from "./auth.service";
import { ErrorService } from "../errors/error.service";
import { Error } from "../errors/error.model";

@Component({
    selector: 'app-signin',
    templateUrl: './signin.component.html'
})
export class SigninComponent implements OnInit {

    signInForm: FormGroup;

    constructor(private authService: AuthService, private router: Router,private errorService:ErrorService) {}

    onSubmit() {
        const user = new User(this.signInForm.value.email, this.signInForm.value.password);
        this.authService.signin(user)
            .subscribe(data => {
                 //TODO handle Success here,
                 this.onSucces(data)
            }, error => { // TODO handle error here
                const errorData = new Error(error.json().title, error.json().error.message);
                this.errorService.handleError(errorData);
            } 
            );
        this.signInForm.reset();
    }

    onSucces(data) {
        this.authService.setLoggedInUserName(data.userName);
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.userId);
        localStorage.setItem('userName', data.userName);
        this.router.navigate(['/', 'home']);
    }

    onSignUp() {
        //TODO route to signup screen;
        this.router.navigate(['/', 'signup']);
    }

    ngOnInit() {
        this.signInForm = new FormGroup({
            email: new FormControl(null, [
                Validators.required,
                Validators.pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")
            ]),
            password: new FormControl(null, Validators.required)
        });
        if(this.authService.isLoggedIn()) {
            this.router.navigate(['/', 'home']);
        }
    }
}