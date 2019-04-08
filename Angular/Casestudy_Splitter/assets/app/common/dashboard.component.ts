import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../auth/auth.service";

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    constructor(private authService : AuthService, private router: Router) {}

    ngOnInit () {
        console.log('dashboard..   '+this.authService.isLoggedIn());
        if(!this.authService.isLoggedIn()) {
            this.router.navigate(['/', 'signin']);
        }
    }
}