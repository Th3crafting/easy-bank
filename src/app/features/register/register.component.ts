import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PasswordValidator } from '../../validators/password.validator';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  registerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router
  ) {
    this.registerForm = this.fb.group({
      name: ['', Validators.required],
      surname: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, PasswordValidator.strongPassword]]
    });
  }

  onSubmit() {
    if (this.registerForm.valid) {
      const userData = this.registerForm.value;

      const users = JSON.parse(localStorage.getItem('users') || '[]');
      users.push(userData);
      localStorage.setItem('users', JSON.stringify(users));

      alert('User registered successfully.');
      this.router.navigate(['/login']);
    }
  }
}
