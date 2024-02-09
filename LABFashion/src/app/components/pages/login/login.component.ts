import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email?: string;
  password?: string;

  constructor(private router: Router) { }

  onSubmit() {
    if (!this.email || !this.password || !this.isValidEmail(this.email) || this.password.length !== 8) {
      if (!this.email || !this.password) {
        alert('Email e senha são obrigatórios');
      } else if (!this.isValidEmail(this.email)) {
        alert('Email inválido');
      } else {
        alert('Senha inválida. A senha deve conter 8 caracteres.');
      }
      return;
    }

    this.router.navigate(['/menu/anchor/dashboard']);
  }

  private isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
}
