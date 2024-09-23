import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [HeaderComponent, FooterComponent, FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contact = {
    name: '',
    email: '',
    subject: '',
    message: ''
  };
  loading = false;
  errorMessage = '';
  successMessage = '';

  onSubmit() {
    this.loading = true;
    // Handle the form submission logic here, e.g., API call
    setTimeout(() => {
      this.loading = false;
      this.successMessage = 'Your message has been sent. Thank you!';
    }, 2000);
  }
}
