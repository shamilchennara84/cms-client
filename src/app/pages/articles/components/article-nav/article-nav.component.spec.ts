import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleNavComponent } from './article-nav.component';

describe('ArticleNavComponent', () => {
  let component: ArticleNavComponent;
  let fixture: ComponentFixture<ArticleNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ArticleNavComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArticleNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
