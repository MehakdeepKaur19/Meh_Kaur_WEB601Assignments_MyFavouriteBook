import { Component, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';
@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.css'
})
export class ContentCardComponent {
 
  @Input() content!: Content;

  constructor() {}
  displayContentInfo() {
    console.log(`Clicked on Content ID: ${this.content.id}, Title: ${this.content.title}`);
  }
  getCardStyles(): { [key: string]: string } {
    switch (this.content.type) {
      case 'Philosophical':
        return { 'background-color': 'beige', color: 'white' }; 
      case 'Romance':
        return { 'background-color': 'pink', color: 'white' }; 
      case 'Classic':
        return { 'background-color': 'green', color: 'white' }; 
      default:
        return {}; 
    }
}
}

