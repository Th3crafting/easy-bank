import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bank-product-list',
  templateUrl: './bank-product-list.component.html',
  styleUrls: ['./bank-product-list.component.css'],
})
export class BankProductListComponent implements OnInit {
  products = [
    { id: 1, name: 'Cuenta de Ahorros Básica', type: 'savings', status: 'active' },
    { id: 2, name: 'Tarjeta de Crédito Platino', type: 'credit', status: 'inactive' },
    { id: 3, name: 'Hipoteca Premium', type: 'mortgage', status: 'pending' },
  ];

  searchTerm: string = '';
  filterType: string = 'all';
  filteredProducts = [...this.products];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.applyFilter();
  }

  applyFilter(): void {
    this.filteredProducts = this.products.filter((product) => {
      const matchesSearch = product.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      const matchesType = this.filterType === 'all' || product.type === this.filterType;
      return matchesSearch && matchesType;
    });
  }

  viewProductDetails(productId: number): void {
    this.router.navigate(['/product-details'], { queryParams: { id: productId } });
  }
}
