import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';

import { ArticlesRoutingModule } from './articles-routing.module';
import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { ArticlesDetailComponent } from './components/articles-detail/articles-detail.component';
import { ArticleComponent } from './components/article/article.component';
import { ArticlePageComponent } from './components/article-page/article-page.component';
import { ArticleNavComponent } from './components/article-nav/article-nav.component';
import { ArticleCreateComponent } from './components/article-create/article-create.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ArticlesListComponent,
    ArticlesDetailComponent,
    ArticleComponent,
    ArticlePageComponent,
    ArticleNavComponent,
    ArticleCreateComponent,
  ],
  imports: [CommonModule, ArticlesRoutingModule, FormsModule],
  providers: [DatePipe],
})
export class ArticlesModule {}
