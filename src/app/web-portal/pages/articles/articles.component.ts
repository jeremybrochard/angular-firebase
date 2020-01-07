import { Component, OnInit } from '@angular/core';
import { ArticlesService } from '../../providers/articles.service';
import { Observable } from 'rxjs';
import { Article } from '../../models/article';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {

  articleList: Observable<Article[]>;

  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
    this.loadArticles();
  }

  private loadArticles() {
    this.articleList = this.articlesService.getAllArticles();
  }

}
