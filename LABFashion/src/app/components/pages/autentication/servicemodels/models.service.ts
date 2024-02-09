import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModelsService {
  private apiUrl = 'http://localhost:3000/modelos';

  constructor(private http: HttpClient, private router: Router) { }

  getModelos(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }

  getModelo(id: number): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get<any>(url);
  }

  addModelo(modelo: any): Observable<any> {
    const newModelo = { ...modelo, id: this.generateId() };
    return this.http.post<any>(this.apiUrl, newModelo);
  }

  private generateId(): string {
    const now = new Date();
    return now.getTime().toString();
  }
}
