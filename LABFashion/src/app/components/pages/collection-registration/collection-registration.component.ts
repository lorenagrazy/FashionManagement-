import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../autentication/colectionservice/auth.service';

@Component({
  selector: 'app-collection-registration',
  templateUrl: './collection-registration.component.html',
  styleUrls: ['./collection-registration.component.css']
})
export class CollectionRegistrationComponent {
  form: FormGroup;

  constructor(private fb: FormBuilder, private AuthService: AuthService) {

    this.form = this.fb.group({
      colecao: ['', Validators.required],
      marca: ['', Validators.required],
      responsavel: ['', Validators.required],
      orcamento: ['', Validators.required],
      estacaolancamento: ['', Validators.required],
      anolancamento: ['', Validators.required],
      modelos: ['', Validators.required],
    });
  }

  onSubmit() {
    const colecao = this.form.value;
    this.AuthService.addColecao(colecao).subscribe();
    this.form.reset();
  }
}