import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-forgotpassword',
  templateUrl: './forgotpassword.component.html',
  styleUrls: ['./forgotpassword.component.css']
})
export class ForgotpasswordComponent {
  constructor(private formBuilder: FormBuilder, private router: Router) { }

  forgotPasswordForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]]
  });

  onSubmit() {
    if (this.forgotPasswordForm.invalid) {
      alert('Por favor, preencha todos os campos corretamente.');
      return;
    }
    this.router.navigate(['forgotpassword/sent-link']);
  }
}
