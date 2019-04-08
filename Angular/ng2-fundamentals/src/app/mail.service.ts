import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  messages = [`Its my first Ng app`,'Ng rocks..','leaning in-progress'];

  update(txt){
    this.messages.push(txt);
  }
  constructor() { }
}
