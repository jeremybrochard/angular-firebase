import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { Article } from '../models/article';
import { ARTICLES_MOCK } from './articles.mock';

@Injectable()
export class ArticlesService {

  constructor() { }

  getAllArticles(): Observable<Article[]> {
    return of(ARTICLES_MOCK).pipe(
      map(list => list.map(item => Article.createArticle(item)))
    );
  }
}
