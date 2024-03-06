import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-content',
  templateUrl: './create-content.component.html',
  styleUrl: './create-content.component.css'
})
export class CreateContentComponent {
  @Output() createContent = new EventEmitter<any>();
  
  content: any = {
    id: 0,
    title: '',
    description: '',
    creator: '',
    imgUrl: '',
    type: '',
    tags: []
  };

  errorMessage: string = '';

  onSubmit() {
    // Bonus: Check for required fields
    if (!this.content.id || !this.content.title || !this.content.description || !this.content.creator) {
      this.errorMessage = 'Please fill in all required fields.';
      return;
    }

    // Clear previous error message
    this.errorMessage = '';

    // Simulate asynchronous content creation
    const promise = new Promise<void>((resolve, reject) => {
      // Simulate success
      if (Math.random() < 0.8) {
        this.createContent.emit({ ...this.content }); // Clone the content
        console.log(`Content added successfully: ${this.content.title}`);
        this.content = { id: 0, title: '', description: '', creator: '', imgUrl: '', type: '', tags: [] }; // Clear input fields
        resolve();
      } else {
        // Simulate failure
        reject('Failed to add content. Please try again.');
      }
    });

    // Handle the result of the promise using .then() and .catch() methods
    promise
      .then(() => console.log('Promise resolved')) // Success function
      .catch((error) => {
        this.errorMessage = error; // Display error message
        console.error(`Promise rejected: ${error}`);
      });
  }
}
