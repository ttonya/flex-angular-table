import { Component, OnInit } from '@angular/core';
import { MessagesService } from '../../services/messages.service';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private messageService: MessagesService) { }

  message: any;
  class: any;

  ngOnInit() {
    this.showNotification();
  }

   showNotification() {
    let notification: HTMLElement = document.getElementById('messages');
    this.messageService.messageSubject.subscribe((message : string) => {
          this.message = message;
          notification.className="messages";
          setTimeout(function() {
            notification.className="not-visible";
          }, 2000) 
      }) 
    }
}
