import { Component } from '@angular/core';
import { ArticleService } from '../../../../services/article.service';
import { ArticleDetail } from '../../../../models/article.model';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-articles-detail',
  templateUrl: './articles-detail.component.html',
  styleUrl: './articles-detail.component.scss',
})
export class ArticlesDetailComponent {
  articleData!: ArticleDetail;
  private subscription!: Subscription;
  currentUserId!: string;

  constructor(
    private articleService: ArticleService,
    private route: ActivatedRoute,
    private authService:AuthService
  ) {}

  ngOnInit(): void {

  this.currentUserId = this.authService.getJwtUserId();



    const articleId = this.route.snapshot.paramMap.get('id');
    if (articleId) {
      this.subscription = this.articleService
        .getArticleById(articleId)
        .subscribe((data) => {
          this.articleData = data;
           console.log('article', this.articleData.author);
        });
    }

      console.log('current user id', this.currentUserId);
     
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
}
