import { Injectable } from '@angular/core';
import {Router} from '@angular/router';
import {AuthResponse} from '../shared/models/AuthResponse';
import {finalize, Observable, tap} from 'rxjs';
import {ApiService} from './api.service';
import {LoadingService} from './loading.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUser: string | null = null;
  private currentRole: UserRole | null = null;

  constructor(private router: Router, private readonly api: ApiService, private readonly loading: LoadingService) {}

  login(username: string, password: string) {
    this.loading.showHse();
    return this.api.login(username, password).pipe(
      tap((response: AuthResponse) => {
        const token = response.bearer;
        const payload = JSON.parse(atob(token.split('.')[1]));
        localStorage.setItem('username', payload.username);
        localStorage.setItem('pseudo',  payload.pseudo);
        localStorage.setItem('role', payload.role);
        localStorage.setItem('token', response.bearer);
        const redirect = payload.role === 'HSE' ? '/hse' : '/exploitant';
        this.router.navigate([redirect]);
      }),
      finalize(() => this.loading.hideHse())
    );
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['/login']);
  }

  getRole(): UserRole | null {
    return this.currentRole || (localStorage.getItem('role') as UserRole);
  }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('username');
  }
}

export type UserRole = 'HSE' | 'Exploitant';
