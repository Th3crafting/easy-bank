import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-product-request',
  templateUrl: './product-request.component.html',
  styleUrl: './product-request.component.css'
})
export class ProductRequestComponent implements OnInit {
  productRequestForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.productRequestForm = this.fb.group({
      productName: ['', [Validators.required, Validators.minLength(3)]],
      productCategory: ['', Validators.required],
      productDescription: ['', [Validators.required, Validators.maxLength(500)]],
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.productRequestForm.valid) {
      const requestData = this.productRequestForm.value;
      console.log('Solicitud enviada:', requestData);
      alert('Solicitud enviada correctamente');
    } else {
      alert('Por favor, complete todos los campos correctamente.');
    }
  }
}
