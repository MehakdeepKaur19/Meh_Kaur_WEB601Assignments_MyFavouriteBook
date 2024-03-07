import { Injectable } from '@angular/core';
import { contentArray } from './helper-files/contentDb';
import { Observable } from 'rxjs/internal/Observable';
import { Content } from './helper-files/content-interface';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor() { }
  getBookContent(): Observable<Content[]> {
    // You can perform additional logic or filtering based on your theme if needed
    return of(contentArray);
    
}}
