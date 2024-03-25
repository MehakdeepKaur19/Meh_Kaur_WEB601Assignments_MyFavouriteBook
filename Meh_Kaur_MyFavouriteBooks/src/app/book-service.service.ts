import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { contentArray } from './helper-files/contentDb';
import { AppMessagesService } from './app-messages.service';
import { Content } from './helper-files/content-interface';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {
  private httpOptions = { headers: new HttpHeaders({ 'Content-type':'application/json' })};
    
  constructor(private http: HttpClient,private appMessagesService: AppMessagesService) {}

  getContentArray(): Observable<any[]> {
    this.appMessagesService.addMessage('Content array loaded!');
    return this.http.get<Content[]>("api/content");
  }
getSingleContentItem(id: number): Observable<any> {
  const item = contentArray.find(content => content.id === id);
  this.appMessagesService.addMessage(`Content Item at id: ${id}`);
  return of(item);
  }
  addContent(newContentItem: Content):Observable<Content>{
return this.http.post<Content>("api/content"
,
newContentItem, this.httpOptions);
}
updateContent(contentItem: Content): Observable<any>{
  return this.http.put("api/content"
  , contentItem,
  this.httpOptions);
  }
  

}
