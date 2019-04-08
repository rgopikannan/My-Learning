import { Routes, RouterModule } from "@angular/router";

import { CategoryListComponent } from "./components/category/category-list.component";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { ProductListComponent } from "./components/product/product-list.component";
import { BasketComponent } from "./components/basket/basket.component";
import { SignupComponent } from "./auth/signup.component";
import { SigninComponent } from "./auth/signin.component";
import { LogoutComponent } from "./auth/logout.component";
import {LoggedInAuthGuard} from "./guards/LoggedInAuthGuard";
import {CanAlwaysActivateGuard} from "./guards/CanAlwaysActivateGuard";
import {CanActivateGuard} from "./guards/CanActivateGuard";

const APP_ROUTES: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full', canActivate: [
        CanAlwaysActivateGuard
    ] },
    { path: 'home', component: CategoryListComponent, canActivate: [
        CanAlwaysActivateGuard
    ] },
    { path: 'productlist', component: ProductListComponent, canActivate: [
        CanAlwaysActivateGuard, LoggedInAuthGuard
    ]},
    { path: 'basket', component: BasketComponent, canActivate: [
        LoggedInAuthGuard
    ]},
    { path: 'checkout', component: CheckoutComponent, canActivate: [
        CanAlwaysActivateGuard, LoggedInAuthGuard
    ]},
    { path: 'signup', component: SignupComponent, canActivate: [
        CanAlwaysActivateGuard
    ]},
    { path: 'signin', component: SigninComponent, canActivate: [
        CanAlwaysActivateGuard
    ]},
    { path: 'logout', component: LogoutComponent, canActivate: [
        CanAlwaysActivateGuard
    ] }
];

export const routing = RouterModule.forRoot(APP_ROUTES);