import { Component, OnInit } from '@angular/core';
import { AppMessagesService } from '../app-messages.service';

@Component({
  selector: 'app-app-messages',
  templateUrl: './app-messages.component.html',
  styleUrl: './app-messages.component.css'
})
export class AppMessagesComponent implements OnInit {
  messages: string[] = [];

  constructor(private appMessagesService: AppMessagesService) { }

  ngOnInit(): void {
    this.appMessagesService.message$.subscribe(message => {
      this.messages.push(message);
    });
  }
}