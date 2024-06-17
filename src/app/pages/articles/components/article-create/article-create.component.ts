import { Component } from '@angular/core';
import { ArticleService } from '../../../../services/article.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-article-create',
  templateUrl: './article-create.component.html',
  styleUrl: './article-create.component.scss',
})
export class ArticleCreateComponent {
  title = '';
  content = '';
  submissionSubscription: Subscription | undefined;

  constructor(private articleService: ArticleService, private router: Router) {}

  submitArticle(): void {
    const observer = {
      next: (response: any) => {
        console.log('Article created successfully', response);
        this.router.navigate(['../']);
      },
      error: (error: any) => {
        console.error('Error creating article', error);
      },
    };

    this.submissionSubscription = this.articleService
      .createArticle(this.title, this.content)
      .subscribe(observer);
  }

  ngOnDestroy() {
    if (this.submissionSubscription) {
      this.submissionSubscription.unsubscribe();
    }
  }
}
