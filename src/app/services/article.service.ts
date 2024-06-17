import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleDetail } from '../models/article.model';

@Injectable({
  providedIn: 'root',
})
export class ArticleService {
  private apiUrl = 'http://localhost:3001/api/articles'; // Replace with your actual API URL

  constructor(private http: HttpClient) {}

  getArticles(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getArticleById(id: string): Observable<ArticleDetail> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
