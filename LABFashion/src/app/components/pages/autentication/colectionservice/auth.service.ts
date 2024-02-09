import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:3000/colecoes';

  constructor(private http: HttpClient, private router: Router) { }

  calcularModelosTotal(colecoes: any[]): number {
    return colecoes.reduce((total, colecao) => total + parseFloat(colecao.modelos), 0);
  }

  calcularOrcamentoMedio(colecoes: any[]): number {
    const totalOrcamento = colecoes.reduce((total, colecao) => {
      const orcamento = colecao.orcamento.replace(/[^\d.-]/g, '');
      return total + parseFloat(orcamento);
    }, 0);
    return totalOrcamento / colecoes.length;
  }

  ordenarTabela(colecoes: any[], coluna: string): any[] {
    const sorted = colecoes.filter(item => item.hasOwnProperty('orcamento')).sort((a, b) => {
      if (coluna === 'colecao' || coluna === 'responsavel') {
        return a[coluna].localeCompare(b[coluna], undefined, { sensitivity: 'base' });
      } else {
        const orcamentoA = parseFloat(a.orcamento.replace(/[^\d.-]/g, ''));
        const orcamentoB = parseFloat(b.orcamento.replace(/[^\d.-]/g, ''));
        return orcamentoB - orcamentoA;
      }
    });
    return coluna === 'orcamento' ? sorted.slice(0, 5) : sorted;
  }

  addColecao(colecao: any): Observable<any> {
    const newColecao = { ...colecao, id: this.generateId() };
    return this.http.post<any>(this.apiUrl, newColecao);
  }

  private generateId(): string {
    const now = new Date();
    return now.getTime().toString();
  }
}
