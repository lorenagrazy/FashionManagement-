import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-collection-edition',
  templateUrl: './collection-edition.component.html',
  styleUrls: ['./collection-edition.component.css']
})
export class CollectionEditionComponent implements OnInit {

  colecao: any;

  constructor(private route: ActivatedRoute, private router: Router, private http: HttpClient) { }

  ngOnInit() {
    const colecaoId = this.route.snapshot.paramMap.get('id');
    this.http.get<any>(`http://localhost:3000/colecoes/${colecaoId}`)
      .subscribe(data => this.colecao = data);
  }

  salvar = () => this.http.put(`http://localhost:3000/colecoes/${this.colecao.id}`, this.colecao)
    .subscribe(data => console.log('Coleção salva com sucesso', data));

  onSubmit = () => this.salvar();

  excluir = () => this.http.delete(`http://localhost:3000/colecoes/${this.colecao.id}`)
    .subscribe(() => {
      console.log('Coleção excluída com sucesso');
      this.router.navigate(['/menu/anchor/collection-listing']);
    });
}
