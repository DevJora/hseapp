import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AuthService, UserRole} from '../../core/auth.service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';
  errorMessage = '';

  constructor(private authService: AuthService) {}

  onLogin() {
    if (!this.username || !this.password) return;

    this.authService.login(this.username, this.password).subscribe({
      next: () => {},
      error: (err) => {
        this.errorMessage = 'Échec de connexion';
        console.error(err);
      }
    });
  }
}
