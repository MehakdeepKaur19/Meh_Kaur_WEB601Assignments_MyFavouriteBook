// content-list.component.ts
import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit{
    ngOnInit() {
    }
    contentList :Content[]= [
    {
      id: 1,
      title: 'The Alchemist',
      description: 'A philosophical novel by Paulo Coelho',
      creator: 'Paulo Coelho',
      imgUrl: 'https://th.bing.com/th/id/OIP.VstFlWVjoGA72T1UYfjYkwHaL9?rs=1&pid=ImgDetMain',
      type: 'Philosophical',
      tags: ['1', '2']
    },
    {
      id: 2,
      title: 'November 9',
      description: 'A romantic novel by Colleen Hoover',
      creator: 'Colleen Hoover',
      imgUrl: 'https://th.bing.com/th/id/R.c1e40ff37e3d96213b709aab0a6d8178?rik=0XEMC7MQYpBytw&pid=ImgRaw&r=0',
      type: 'Romance',
      tags: ['3', '4']
    },
    {
      id: 3,
      title: 'City of Bones',
      description: 'The first book in The Mortal Instruments series by Cassandra Clare',
      creator: 'Cassandra Clare',
      type: 'Fantasy'
    },
    {
      id: 4,
      title: 'Think Like a Monk',
      description: 'A book on personal development and mindfulness by Jay Shetty',
      creator: 'Jay Shetty',
      imgUrl: 'https://th.bing.com/th/id/OIP.J0pwUIV4-oyS_pMR90RK6gHaLY?rs=1&pid=ImgDetMain'
    },
    {
      id: 5,
      title: 'The Great Gatsby',
      description: 'A classic novel by F. Scott Fitzgerald',
      creator: 'F. Scott Fitzgerald',
      imgUrl: 'https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781982146702/the-great-gatsby-9781982146702_xlg.jpg',
      type: 'Classic',
      tags: ['5', '6']
    },
    {
      id: 6,
      title: 'The Hitchhiker\'s Guide to the Galaxy',
      description: 'A comedic science fiction series by Douglas Adams',
      creator: 'Douglas Adams',
      type: 'Science Fiction',
      imgUrl: 'https://images.thenile.io/r1000/9780345418913.jpg',
      tags: ['7', '8']
    },
    {
      id: 7,
      title: 'To Kill a Mockingbird',
      description: 'A classic novel by Harper Lee',
      creator: 'Harper Lee',
      imgUrl: 'https://th.bing.com/th/id/OIP.W1ngiF2AkQaO78CY9yC1HQHaLd?rs=1&pid=ImgDetMain',
      type: 'Classic',
      tags: ['9', '1']
    },
    {
      id: 8,
      title: 'Sapiens: A Brief History of Humankind',
      description: 'A popular science book by Yuval Noah Harari',
      creator: 'Yuval Noah Harari',
      imgUrl: 'https://th.bing.com/th/id/OIP.mQxDdzsaRLLxfWTI28ooUQHaIp?rs=1&pid=ImgDetMain'
        }
  ];



}