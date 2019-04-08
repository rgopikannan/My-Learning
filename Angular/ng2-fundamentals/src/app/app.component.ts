import { Component, Inject } from '@angular/core';

/* @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
}) */

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
  })

/* template: `<div>
     <app-simple-form (update)="onUpdate($event)"></app-simple-form>
    </div>

    <ul>
      <li *ngFor="let item of mailObj.messages">{{item}}</li>
    </ul>
    ` */
export class AppComponent {
  title = 'ng2-fundamentals';

    constructor(@Inject('mail') private mailObj){

  }

    onUpdate(event){
      var txt = event.text;
      console.log(event);
      this.mailObj.update(txt);
    }
}
