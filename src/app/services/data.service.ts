import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { articlesURL } from '../constants';
import { IArticle } from 'src/app/models/iarticle';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  getArticlesData() {
    return this.http.get<IArticle[]>(`${articlesURL}`);
  }

  getArticleData(id: number) {
    return this.http.get<IArticle>(`${articlesURL}/${id}`);
  }
}
