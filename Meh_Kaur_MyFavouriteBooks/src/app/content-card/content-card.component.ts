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
    imgUrl: 'https://m.media-amazon.com/images/I/81s0B6NYXML._SL1500_.jpg',
    type: 'Romance'
  });

  this.contentList.add({
    id: 2,
    title: 'November 9',
    description: 'A romantic novel by Colleen Hoover',
    creator: 'Colleen Hoover',
    imgUrl: 'https://th.bing.com/th/id/R.c1e40ff37e3d96213b709aab0a6d8178?rik=0XEMC7MQYpBytw&pid=ImgRaw&r=0',
    type: 'Romance'
  });

  this.contentList.add({
    id: 3,
    title: 'City of Bones',
    description: 'The first book in The Mortal Instruments series by Cassandra Clare',
    creator: 'Cassandra Clare',
    imgUrl: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781481470308/city-of-bones-9781481470308_hr.jpg',
    type: 'Fantasy'
  });

  this.contentList.add({
    id: 4,
    title: 'Think Like a Monk',
    description: 'A book on personal development and mindfulness by Jay Shetty',
    creator: 'Jay Shetty',
    imgUrl: 'https://th.bing.com/th/id/OIP.J0pwUIV4-oyS_pMR90RK6gHaLY?rs=1&pid=ImgDetMain',
    type: 'Self-Help'
  });
}
ngOnInit(): void {
  let invalidIndexContent = this.contentList.displayItem(5);
  console.log(invalidIndexContent);
}
}
