import { Component, OnInit, Inject, Input, Output, EventEmitter} from '@angular/core';
@Component({
  selector: 'app-simple-form',
  template: `
      {{message}}
      <input #myInput type="text" [(ngModel)]="message" >
      <button (click)="update.emit({text:message})">Click me</button>
  `,
  styles: []
})
export class SimpleFormComponent implements OnInit {

  constructor(@Inject('mail') private mailService) { }

  @Input() message;
  @Output() update = new EventEmitter();
  onClick(event, val){
    console.log(event+"  "+val);
  }

  ngOnInit() {
  }

}
