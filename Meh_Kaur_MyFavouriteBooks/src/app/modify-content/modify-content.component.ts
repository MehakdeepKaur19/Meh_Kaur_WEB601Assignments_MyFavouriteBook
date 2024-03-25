import { Component, EventEmitter, Output } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { BookServiceService } from '../book-service.service';
import { AppMessagesService } from '../app-messages.service';

@Component({
  selector: 'app-modify-content',
  templateUrl: './modify-content.component.html',
  styleUrls: ['./modify-content.component.css']
})
export class ModifyContentComponent {
  @Output() contentAdded = new EventEmitter<Content>();

  newContent: Content = {
    id: null,
    title: '',
    description: '',
    creator: ''
  };
  isUpdating: boolean = false; // Bonus

  constructor(
    private contentService: BookServiceService,
    private messageService: AppMessagesService
  ) {}

  ngOnInit() {
  }

  addOrUpdateContent() {
    if (this.isUpdating) {
    } else {
      this.contentService.addContent(this.newContent)
        .subscribe((addedContent: Content | undefined) => {
          this.contentAdded.emit(addedContent);
          this.clearForm();
          this.messageService.addMessage('Content added successfully!');

        });
    }
  }

  clearForm() {
    this.newContent = {
      id: null,  // Assign a unique ID later
      title: '',
      description: '',
      creator: ''
    };
    this.isUpdating = false; // Reset update flag (Bonus)
  }
}
