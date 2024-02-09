import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-userregistration',
  templateUrl: './userregistration.component.html',
  styleUrls: ['./userregistration.component.css'],
})
export class UserregistrationComponent {
  userForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder) {

    this.userForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3), Validators.pattern('^[a-zA-Z\\s]*$')]],
      company: ['', [Validators.required, Validators.minLength(3)]],
      cnpj: ['', [Validators.required, Validators.pattern('^\\d{2}\\.\\d{3}\\.\\d{3}\\/\\d{4}\\-\\d{2}$')]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      passwordConfirmation: ['', [Validators.required, Validators.minLength(8)]],
    }, { validators: this.passwordMatchValidator });
  }

  passwordMatchValidator(control: AbstractControl) {
    const password = control.get('password')?.value;
    const passwordConfirmation = control.get('passwordConfirmation')?.value;
    return password === passwordConfirmation ? null : { passwordMismatch: true };
  }

  getErrorMessage(controlName: string): string {
    const control = this.userForm.get(controlName);
    if (control?.touched && control.invalid) {
      if (control.hasError('required')) {
        return 'Campo obrigatório';
      }
      if (control.hasError('minlength')) {
        return 'O campo deve ter pelo menos 8 caracteres';
      }
      if (control.hasError('pattern')) {
        if (controlName === 'name') {
          return 'Nome inválido (somente letras e espaços)';
        }
        if (controlName === 'cnpj') {
          return 'CNPJ inválido (deve seguir o formato XX.XXX.XXX/XXXX-XX)';
        }
        if (controlName === 'email') {
          return 'E-mail inválido';
        }
      }
      if (control.hasError('passwordMismatch')) {
        return 'As senhas não coincidem';
      }
    }
    return '';
  }

  onSubmit() {
    if (this.userForm.valid) {
      if (this.userForm.controls['password'].value !== this.userForm.controls['passwordConfirmation'].value) {

        alert('As senhas não coincidem');
        return;
      }
      this.router.navigateByUrl('/login');
    } else {
      alert('Preencha corretamente todos os campos');
    }

    if (this.userForm.valid) {
      this.router.navigateByUrl('/login');
    } else {
      alert('Preencha corretamente todos os campos');
    }
  }

  onPasswordInput() {
    const passwordInput = document.getElementById('passwordInput');
    const passwordConfirmationInput = document.getElementById('passwordConfirmationInput');
    if (passwordInput && passwordConfirmationInput) {
      passwordConfirmationInput.setAttribute('type', 'password');
    }
  }

  onPasswordConfirmationInput() {
    const passwordInput = document.getElementById('passwordInput');
    const passwordConfirmationInput = document.getElementById('passwordConfirmationInput');
    if (passwordInput && passwordConfirmationInput) {
      passwordInput.setAttribute('type', 'password');
    }
  }

}
