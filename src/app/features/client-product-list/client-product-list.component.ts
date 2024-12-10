import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-product-list',
  templateUrl: './client-product-list.component.html',
  styleUrls: ['./client-product-list.component.css'],
})
export class ClientProductListComponent implements OnInit {
  clientProducts = [
    { id: 1, name: 'Cuenta de Ahorros Básica', type: 'savings', status: 'active' },
    { id: 2, name: 'Tarjeta de Crédito Platino', type: 'credit', status: 'inactive' },
    { id: 3, name: 'Hipoteca Premium', type: 'mortgage', status: 'pending' },
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {}

  viewProductDetails(productId: number): void {
    this.router.navigate(['/product-details'], { queryParams: { id: productId } });
  }
}
