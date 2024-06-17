import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrl: './article.component.scss',
})
export class ArticleComponent {
  @Input() articleId!:string;
  @Input() title!: string;
  @Input() date!: string;
  @Input() content!: string;
}
