import { Injectable } from '@angular/core';
import {AuthResponse} from '../shared/models/AuthResponse';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://api-m8ri.onrender.com/api'; // adapte à ton backend

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<AuthResponse> {
    const auth = {'username': username, 'password': password};
    return this.http.post<AuthResponse>(`${this.baseUrl}/login`, auth);
  }
}
