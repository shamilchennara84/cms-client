import { Component, OnDestroy, OnInit } from '@angular/core';
import { Article } from '../../../../models/article.model';
import { ArticleService } from '../../../../services/article.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrl: './articles-list.component.scss',
})
export class ArticlesListComponent implements OnInit, OnDestroy {
  articles: Article[] = [];
  articleSubscription: Subscription | undefined;

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
     this.articleSubscription  = this.articleService.getArticles().subscribe((articles) => {
      this.articles = articles;
    });
    console.log(this.articles);
  }

  ngOnDestroy(): void {
    if (this.articleSubscription) {
      this.articleSubscription.unsubscribe();
    }
  }
}
