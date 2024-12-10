import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
  userName: string | null = null;
  userEmail: string | null = null;
  userRole: 'client' | 'employee' | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.userName = this.authService.getUserName();
    this.userRole = this.authService.getUserRole();

    this.userEmail = this.userName === 'John Doe' ? 'client@bank.com' : 'employee@bank.com';
  }

  goToDashboard(): void {
    this.router.navigate(['/dashboard']);
  }

  goToProducts(): void {
    this.router.navigate(['/client-product-list']);
  }

  logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
