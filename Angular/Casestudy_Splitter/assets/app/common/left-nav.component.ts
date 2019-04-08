import { Component } from "@angular/core";
import { AuthService } from "../auth/auth.service";

@Component({
    selector: 'app-left-nav',
    templateUrl: './left-nav.component.html'
})
export class LeftNavComponent {
    constructor(private authService :AuthService) {}
}