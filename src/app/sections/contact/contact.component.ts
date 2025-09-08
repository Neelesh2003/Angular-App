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

  sendEmail(form: NgForm) {
    if (!form.valid) {
      this.message = "Please fill in all required fields!";
      this.messageColor = 'red';
      return;
    }

    emailjs.sendForm(
      'service_1ilwcxb', // replace with your EmailJS service ID
      'template_58qtj7i', // replace with your EmailJS template ID
      form.form as any,   // correct casting
      'znmdwYwDCfI1R2hUZ' // replace with your public key
    ).then((response: EmailJSResponseStatus) => {
      console.log('SUCCESS!', response.status, response.text);
      this.message = "😊 Message sent successfully! 💯";
      this.messageColor = 'white';
      form.resetForm();
    }, (error) => {
      console.log('FAILED...', error);
      this.message = "Oops! Something went wrong. Please try again.";
      this.messageColor = 'red';
    });
  }
}
