import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {

  isactive = true;
  counter = 1;

  increment() {
    this.counter++;
  }

  decrement() {
    this.counter--;
  }

value:number = 0;
result:string = '';

primeverifier() {
  if (this.value <= 1) {
    this.result = 'Not Prime';
    return;
  }

  for (let i = 2; i <= Math.sqrt(this.value); i++) {
    if (this.value % i === 0) {
      this.result = 'Not Prime';
      return;
    }
  }

  this.result = 'Prime';

}

