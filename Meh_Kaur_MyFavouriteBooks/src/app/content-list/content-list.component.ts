import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface'; // Add this import statement
import { contentArray } from '../helper-files/contentDb';
import { BookServiceService } from '../book-service.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {
  contents: Content[] = contentArray;

  constructor(private bookServiceService: BookServiceService) {
    this.bookServiceService.getContentArray().subscribe(data => {
      this.contents = data;
    });
  }

  ngOnInit() {
    this.contents.forEach(content => content.isSelected = false);
  }

  searchTitle: string = '';
  searchResultMessage: string = '';
  searchResultColor: string = '';

  searchContent() {
    let contentExists = this.contents.some(content => content.title.toLowerCase() === this.searchTitle.toLowerCase());

    if (contentExists) {
      this.searchResultMessage = 'Content item exists!';
      this.searchResultColor = 'green';
      let selectedContent = this.contents.find(content => content.title === this.searchTitle);
      if (selectedContent) {
        selectedContent.isSelected = true;
      }
    } else {
      this.searchResultMessage = 'Content item does not exist!';
      this.searchResultColor = 'red';
    }
  }
}
