import { Component, OnInit } from '@angular/core';
import { ModelsService } from '../autentication/servicemodels/models.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-listing',
  templateUrl: './template-listing.component.html',
  styleUrls: ['./template-listing.component.css']
})
export class TemplateListingComponent implements OnInit {

  modelo: any = {};

  constructor(private http: HttpClient, private router: Router, private modelsService: ModelsService) { }

  ngOnInit(): void {
    this.modelsService.getModelos().subscribe((data) => {
      this.modelo = data;
    })
  }

  irParaEdicao(modeloId: number) {
    console.log('Ir para edição do modelo', modeloId);
    this.router.navigate(['menu/anchor/template-editing', modeloId]);
  }
}
