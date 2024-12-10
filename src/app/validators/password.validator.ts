import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidator {
  static strongPassword(control: AbstractControl): ValidationErrors | null {
    const value = control.value;

    if (!value) return { required: true };

    const hasUpperCase = /[A-Z]/.test(value);
    const hasLowerCase = /[a-z]/.test(value);
    const hasNumber = /[0-9]/.test(value);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(value);
    const hasMinLength = value.length >= 8;

    const isValid = hasUpperCase && hasLowerCase && hasNumber && hasSpecialChar && hasMinLength;

    if (!isValid) {
      return {
        strongPassword: {
          hasUpperCase,
          hasLowerCase,
          hasNumber,
          hasSpecialChar,
          hasMinLength,
        }
      };
    }

    return null;
  }
}
