import { Component } from '@angular/core';
import emailjs, { EmailJSResponseStatus } from '@emailjs/browser';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {

  message: string = '';
  messageColor: string = '';

  sendEmail(form: NgForm, event: Event) {
    if (!form.valid) {
      this.message = "Please fill in all required fields!";
      return;
    }

    const formElement = event.target as HTMLFormElement;

    emailjs.sendForm(
      'service_1ilwcxb', // Your EmailJS service ID
      'template_58qtj7i', // Your EmailJS template ID
      formElement,        // Pass the actual form element here
      'znmdwYwDCfI1R2hUZ' // Your EmailJS public key
    ).then((response: EmailJSResponseStatus) => {
      this.message = "😊 Message sent successfully! 💯";

      form.resetForm();
    }, (error) => {
      this.message = "Oops! Something went wrong. Please try again.";
      this.messageColor = 'red';
    });
  }
}
