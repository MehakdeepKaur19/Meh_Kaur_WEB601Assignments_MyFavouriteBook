import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppMessagesService {
  private messageSource = new Subject<string>();
  message$ = this.messageSource.asObservable();

  addMessage(message: string) {
    this.messageSource.next(message);
}

}