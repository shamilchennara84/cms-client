import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, Observable } from 'rxjs';
import {  AuthResponse } from '../models/auth.model'; // Assuming there's a model for registration response

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://localhost:3001/api/users';

  constructor(private http: HttpClient, private router: Router) {}

  login(credentials: {
    email: string;
    password: string;
  }): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${this.apiUrl}/login`, credentials)
      .pipe(
        map((response) => {
          localStorage.setItem('token', response.token);
          return response;
        })
      );
  }

  register(user: {
    name: string;
    email: string;
    password: string;
  }): Observable<AuthResponse> {
    return this.http
      .post<AuthResponse>(`${this.apiUrl}/register`, user)
      .pipe(
        map((response) => {
          localStorage.setItem('token', response.token); 
          return response;
        })
      );
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  public get loggedIn(): boolean {
    return localStorage.getItem('token') !== null;
  }
}
