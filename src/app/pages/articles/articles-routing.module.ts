import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ArticlesListComponent } from './components/articles-list/articles-list.component';
import { authGuard } from '../../guards/auth.guard';
import { ArticlesDetailComponent } from './components/articles-detail/articles-detail.component';
import { ArticlePageComponent } from './components/article-page/article-page.component';
import { ArticleCreateComponent } from './components/article-create/article-create.component';

const routes: Routes = [
  { path: '', redirectTo: 'view', pathMatch: 'full' },
  {
    path: 'view',
    component: ArticlePageComponent,
    canActivate: [authGuard],
    children: [
      {
        path: '',
        redirectTo: 'list',
        pathMatch: 'full',
      },
      {
        path: 'list',
        component: ArticlesListComponent,
        canActivate: [authGuard],
      },
      {
        path: 'detail:id',
        component: ArticlesDetailComponent,
        canActivate: [authGuard],
      },
    ],
  },
  {
    path: 'create',
    component: ArticleCreateComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlesRoutingModule {}
