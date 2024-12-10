import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  constructor(private router: Router) {}

  goToCreateProduct(): void {
    this.router.navigate(['/product-create']);
  }

  goToRequests(): void {
    this.router.navigate(['/request-list']);
  }

  goToDeliveryRequests(): void {
    this.router.navigate(['/delivery-list']);
  }

  goToBankProducts(): void {
    this.router.navigate(['/bank-product-list']);
  }
}
