import { Component } from '@angular/core';

@Component({
  selector: 'app-contact-us',
  standalone: false,
  templateUrl: './contact-us.html',
  styleUrl: './contact-us.css',
})
export class ContactUS {
  name: string = 'Arjun Menon';
  designation: string = 'Java Full Stack Developer';
  image: string = 'profile.jpg';
  description: string = 'Working with Angular and Spring Boot.';
  isButtonDisabled: boolean = true;
}
