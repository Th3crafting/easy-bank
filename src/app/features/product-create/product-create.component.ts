import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      type: [null, Validators.required],
      rate: [null, [Validators.required, Validators.min(0)]],
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      console.log('Product Created:', this.productForm.value);
      alert('¡Producto creado exitosamente!');
      this.router.navigate(['/dashboard']);
    }
  }
}
