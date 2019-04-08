import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { MailService } from './mail.service';
import { ExampleFormsComponent } from './example-forms/example-forms.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    ExampleFormsComponent
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [{provide:'mail', useClass:MailService}],
  bootstrap: [AppComponent]
})
export class AppModule { }
