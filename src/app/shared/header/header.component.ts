import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuOpen = false;

  constructor(
    public translate: TranslateService,
    private authService: AuthService,
  ) {
    this.translate.use(this.translate.currentLang || 'en');
  }

  toggleMenu() {
    this.menuOpen = !this.menuOpen;
  }

  changeLanguage(lang: string) {
    this.translate.use(lang);
    localStorage.setItem('lang', lang);
  }

  isAuthenticated(): boolean {
    return this.authService.isAuthenticated();
  }

  getUserRole(): string | null {
    return this.authService.getUserRole();
  }

  getUserName(): string | null {
    return this.authService.getUserName();
  }

  logout(): void {
    this.authService.logout();
    alert('Sesión cerrada con éxito');
  }
}
