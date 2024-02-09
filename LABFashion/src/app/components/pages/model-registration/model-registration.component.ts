import { Component } from '@angular/core';
import { ModelsService } from '../autentication/servicemodels/models.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-model-registration',
  templateUrl: './model-registration.component.html',
  styleUrls: ['./model-registration.component.css']
})
export class ModelRegistrationComponent {

  form: FormGroup;

  constructor(private fb: FormBuilder, private ModelsService: ModelsService) {

    this.form = this.fb.group({
      nome: ['', Validators.required],
      responsavel: ['', Validators.required],
      colecao: ['', Validators.required],
      tipo: ['', Validators.required],
      bordado: ['', Validators.required],
      estampa: ['', Validators.required],
    });
  }

  onSubmit() {
    const modelo = this.form.value;
    this.ModelsService.addModelo(modelo).subscribe();
    this.form.reset();
  }
}