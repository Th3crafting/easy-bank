import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedIn: boolean = false;
  private userRole: 'client' | 'employee' | null = null;
  private userName: string | null = null;


  constructor() {
    this.loadFromStorage();
  }

  login(role: 'client' | 'employee', userName: string): void {
    this.isLoggedIn = true;
    this.userRole = role;
    this.userName = userName;

    this.saveToStorage();
  }

  logout(): void {
    this.isLoggedIn = false;
    this.userRole = null;
    this.userName = null;

    localStorage.removeItem('auth');
  }

  isAuthenticated(): boolean {
    return this.isLoggedIn;
  }

  getUserRole(): 'client' | 'employee' | null {
    return this.userRole;
  }

  getUserName(): string | null {
    return this.userName;
  }

  private saveToStorage(): void {
    const authData = {
      isLoggedIn: this.isLoggedIn,
      userRole: this.userRole,
      userName: this.userName
    };
    localStorage.setItem('auth', JSON.stringify(authData));
  }

  private loadFromStorage(): void {
    const authData = localStorage.getItem('auth');
    if (authData) {
      const { isLoggedIn, userRole, userName } = JSON.parse(authData);
      this.isLoggedIn = isLoggedIn;
      this.userRole = userRole;
      this.userName = userName;
    }
  }
}
