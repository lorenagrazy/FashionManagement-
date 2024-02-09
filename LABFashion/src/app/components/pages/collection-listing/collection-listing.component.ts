import { Component, OnInit } from '@angular/core';
import { AuthService } from '../autentication/colectionservice/auth.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collection-listing',
  templateUrl: './collection-listing.component.html',
  styleUrls: ['./collection-listing.component.css']
})
export class CollectionListingComponent implements OnInit {

  colecoes: any[] = [];

  constructor(private http: HttpClient, private router: Router) { }

  ngOnInit() {
    this.http.get<any[]>('http://localhost:3000/colecoes').subscribe(data => {
      this.colecoes = data;
    });
  }

  irParaEdicao(colecao: any) {
    console.log('Ir para edição da coleção', colecao);
    this.router.navigate(['menu/anchor/collection-edition', colecao.id]);
  }
}
