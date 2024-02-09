import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthService } from '../autentication/colectionservice/auth.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  colecoesTotal?: number;
  modelosTotal?: number;
  orcamentoMedio?: number;

  colecoes: any[] = [];

  constructor(private http: HttpClient, private authService: AuthService) { }

  ngOnInit(): void {
    this.http.get<any[]>('http://localhost:3000/colecoes').subscribe(data => {
      this.colecoes = this.authService.ordenarTabela(data, 'orcamento');
      this.colecoesTotal = data.length;
      this.modelosTotal = this.authService.calcularModelosTotal(data);
      this.orcamentoMedio = this.authService.calcularOrcamentoMedio(data);
    });
  }

  ordenarTabela(coluna: string): void {
    this.colecoes = this.authService.ordenarTabela(this.colecoes, coluna);
  }

}