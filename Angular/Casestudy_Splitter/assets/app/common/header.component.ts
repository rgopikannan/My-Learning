import { Component } from "@angular/core";
import { AuthService } from "../auth/auth.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styles: [`
    .row{
        margin: 0 0 20px 0;
    }
    `]

})
export class HeaderComponent {
    constructor(private authService :AuthService) {}
}