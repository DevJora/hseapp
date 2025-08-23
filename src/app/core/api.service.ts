import { Injectable } from '@angular/core';
import {AuthResponse} from '../shared/models/AuthResponse';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {LocationSite} from '../shared/models/Location';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl = 'https://api-m8ri.onrender.com/api'; // adapte à ton backend
   result: any;

  constructor(private http: HttpClient) {}

  login(username: string, password: string): Observable<AuthResponse> {
    const auth = {'username': username, 'password': password};
    return this.http.post<AuthResponse>(`${this.baseUrl}/login`, auth);
  }

  createLocation(location: { location: String }): Observable<string> {
    return this.http.post<string>(`${this.baseUrl}/location`, location);
  }

  getAllLocations() {
    return this.http.get<LocationSite[]>(`${this.baseUrl}/location`);
  }

  deleteLocation(location: string) {
    return this.http.delete(`${this.baseUrl}/location/${location}`);
  }
}
