import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor() { }
 
  message: any;
  messageSubject : Subject<string> = new Subject<string>();

  showMessage(message) {
    this.messageSubject.next(message);
  }

}
