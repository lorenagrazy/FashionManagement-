import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ModelsService } from '../autentication/servicemodels/models.service';


@Component({
  selector: 'app-template-editing',
  templateUrl: './template-editing.component.html',
  styleUrls: ['./template-editing.component.css']
})

export class TemplateEditingComponent implements OnInit {
  modelo: any = {};

  modelos: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient, private modelsService: ModelsService
  ) { }

  ngOnInit() {

    const modeloId = parseInt(this.route.snapshot.paramMap.get('id') || '0', 10);
    if (isNaN(modeloId)) {
    }

    this.modelsService.getModelo(modeloId).subscribe((data) => {
      this.modelo = data;
    });


    const colecaoId = this.route.snapshot.paramMap.get('id');
    this.http.get<any>(`http://localhost:3000/modelos/${colecaoId}`)
      .subscribe(data => this.modelos = data);
  }

  salvar = () => this.http.put(`http://localhost:3000/modelos/${this.modelo.id}`, this.modelo)
    .subscribe(data => console.log('Coleção salva com sucesso', data));

  onSubmit = () => this.salvar();

  excluir = () => this.http.delete(`http://localhost:3000/modelos/${this.modelo.id}`)
    .subscribe(() => {
      console.log('Coleção excluída com sucesso');
      this.router.navigate(['/menu/anchor/template-listing']);
    });
} 
