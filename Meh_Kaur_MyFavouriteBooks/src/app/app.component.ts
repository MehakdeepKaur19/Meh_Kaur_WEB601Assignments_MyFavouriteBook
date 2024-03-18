import { Component, OnInit } from '@angular/core';
import { BookServiceService } from './book-service.service';
import { contentArray } from './helper-files/contentDb';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Meh_Kaur_MyFavouriteBooks';
  singleContentItem: any;
  selectedId: number | undefined;
  errorMessage: string | undefined;

  constructor(private bookServiceService: BookServiceService) {}

  ngOnInit(): void {
    this.loadSingleContent(1);
  }

  loadSingleContent(id: number): void {
    this.bookServiceService.getSingleContentItem(id).subscribe(
      item => {
        this.singleContentItem = item;
      },
      error => {
        console.error('Error occurred while loading single content:', error);
      }
    );
  }

  getContentItem(): void {
    if (this.selectedId === undefined || !Number.isInteger(this.selectedId) || this.selectedId <= 0 || this.selectedId > contentArray.length) {
      this.errorMessage = 'Invalid id entered.';
    } else {
      this.errorMessage = '';
      this.loadSingleContent(this.selectedId);
    }
  }
}
