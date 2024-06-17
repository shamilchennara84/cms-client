import { Component } from '@angular/core';
import { ArticleService } from '../../../../services/article.service';
import { ArticleDetail } from '../../../../models/article.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articles-detail',
  templateUrl: './articles-detail.component.html',
  styleUrl: './articles-detail.component.scss',
})
export class ArticlesDetailComponent {
  articleData!: ArticleDetail;
  private subscription!: Subscription;

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const articleId = this.route.snapshot.paramMap.get('id');
    if (articleId) {
      this.subscription = this.articleService
        .getArticleById(articleId)
        .subscribe((data) => {
          this.articleData = data;
        });
    }
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
