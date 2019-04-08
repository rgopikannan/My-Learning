import { Routes, RouterModule } from "@angular/router";

import { DashboardComponent } from "./common/dashboard.component";
import { SignupComponent } from "./auth/signup.component";
import { SigninComponent } from "./auth/signin.component";
import { LogoutComponent } from "./auth/logout.component";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/signin', pathMatch: 'full' },
    { path: 'home', component: DashboardComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent },
    { path: 'logout', component: LogoutComponent }
];

export const routing = RouterModule.forRoot(APP_ROUTES);