import { Component } from '@angular/core';
import { ContentList } from '../helper-files/content-list';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.css'
})
export class ContentCardComponent {
  contentList: ContentList;

  constructor() {
    this.contentList = new ContentList({
    id: 1,
    title: 'It Ends with Us',
    description: 'Book about lovers',
    creator: 'Colleen Hoover',
    imgUrl: 'itendswithus.jpg',
    type: 'Romance'
  });

  this.contentList.add({
    id: 2,
    title: 'November 9',
    description: 'A romantic novel by Colleen Hoover',
    creator: 'Colleen Hoover',
    imgUrl: 'november9.jpg',
    type: 'Romance'
  });

  this.contentList.add({
    id: 3,
    title: 'City of Bones',
    description: 'The first book in The Mortal Instruments series by Cassandra Clare',
    creator: 'Cassandra Clare',
    imgUrl: 'cityofbones.jpg',
    type: 'Fantasy'
  });

  this.contentList.add({
    id: 4,
    title: 'Think Like a Monk',
    description: 'A book on personal development and mindfulness by Jay Shetty',
    creator: 'Jay Shetty',
    imgUrl: 'thinklikeamonk.jpg',
    type: 'Self-Help'
  });
}
}
