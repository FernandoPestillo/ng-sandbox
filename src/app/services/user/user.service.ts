import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class UserService {
  private apiUrl = 'http://localhost:3000/api/user';

  constructor(private http: HttpClient) {}

  listar() {
    return this.http.get(this.apiUrl);
  }
  getById(id: string) {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  criar(dados: any) {
    return this.http.post(this.apiUrl, dados);
  }
}
