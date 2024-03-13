import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { contentArray } from './helper-files/contentDb';
import { AppMessagesService } from './app-messages.service';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  constructor(private appMessagesService: AppMessagesService) {}

  getContentArray(): Observable<any[]> {
    this.appMessagesService.addMessage('Content array loaded!');
    return of(contentArray);
  }
getSingleContentItem(id: number): Observable<any> {
  const item = contentArray.find(content => content.id === id);
  this.appMessagesService.addMessage(`Content Item at id: ${id}`);
  return of(item);
  }

}
