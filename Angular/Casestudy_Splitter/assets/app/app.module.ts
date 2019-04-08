import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./common/dashboard.component";
import { LeftNavComponent } from "./common/left-nav.component";
import { CenterComponent } from "./common/center.component";
import { HeaderComponent } from "./common/header.component";
import { BillService } from "./bill/bill.service";
import { AddBillComponent } from "./bill/add-bill.component";
import { BillComponent } from "./bill/bill.component";
import { BillListComponent } from "./bill/bill-list.component";
import { BillFilter } from "./bill/bill.filter";
import { FriendListComponent } from "./friend/friend-list.component";
import { FriendService } from "./friend/friend.service";
import { routing } from "./app.routing";
import { LogoutComponent } from "./auth/logout.component";
import { SignupComponent } from "./auth/signup.component";
import { SigninComponent } from "./auth/signin.component";
import { AuthService } from "./auth/auth.service";
import { ErrorComponent } from "./errors/error.component";
import { ErrorService } from "./errors/error.service";

@NgModule({
    declarations: [
        AppComponent,
        DashboardComponent,
        LeftNavComponent,
        CenterComponent,
        FriendListComponent,
        HeaderComponent,
        LogoutComponent,
        SignupComponent,
        SigninComponent,
        ErrorComponent,
        BillComponent,
        AddBillComponent,
        BillListComponent,
        BillFilter
    ],
    imports: [
        BrowserModule,
        FormsModule,
        routing,
        ReactiveFormsModule,
        HttpModule
    ],
    providers: [AuthService, BillService, ErrorService, FriendService],
    bootstrap: [AppComponent]
})
export class AppModule {

}