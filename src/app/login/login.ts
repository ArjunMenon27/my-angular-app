import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  standalone: false,
  styleUrl: './login.css'
})
export class Login {
  email = '';
  password = '';
  errorMessage = '';

  constructor(private router: Router) {}

  onSubmit() {
    if (!this.email || !this.password) {
      this.errorMessage = 'Please fill in all fields.';
      return;
    }
    // Placeholder login logic
    console.log('Login:', this.email, this.password);
    this.errorMessage = '';
    alert('Login successful!');
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
