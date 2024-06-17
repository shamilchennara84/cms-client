import { Component } from '@angular/core';
import { AuthService } from '../../../../services/auth.service';

@Component({
  selector: 'app-article-nav',
  templateUrl: './article-nav.component.html',
  styleUrl: './article-nav.component.scss',
})
export class ArticleNavComponent {
  mobileMenuOpen = false;

  constructor(private authService:AuthService){

  }
  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }
  logout() {
    this.authService.logout();
  }
}
