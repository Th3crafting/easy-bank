import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordValidator } from '../../validators/password.validator';
import { AuthService } from '../../core/services/auth.service';
import { HttpClient } from '@angular/common/http';
import { MockUser } from './models/user.model';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  activeTab: 'client' | 'employee' = 'client';
  mockUsers: MockUser[] = [];

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService,
    private http: HttpClient,
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, PasswordValidator.strongPassword]],
    });
  }

  ngOnInit(): void {
    this.http.get<MockUser[]>('/assets/data/mock-users.json').subscribe(mockUsers => {
      this.mockUsers = mockUsers;
    });
  }

  setActiveTab(tab: 'client' | 'employee'): void {
    this.activeTab = tab;
    this.loginForm.reset();
  }

  onSubmit(role: 'client' | 'employee'): void {
    if (this.loginForm.invalid) {
      alert('Por favor, complete todos los campos correctamente.');
      return;
    }

    const { email, password } = this.loginForm.value;

    const user = this.mockUsers.find(
      (u) => u.email === email && u.password === password && u.role === role
    );

    if (user) {
      this.authService.login(role, `${user.firstName} ${user.lastName}`);
      alert(`¡Inicio de sesión exitoso como ${user.role === 'client' ? 'Cliente' : 'Empleado'}!`);
      this.router.navigate(['/']);
    } else {
      alert('Credenciales inválidas.');
    }
  }
}
