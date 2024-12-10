import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  currentImage: string = '/images/bank-image.webp';

  constructor(
    private router: Router,
    private authService: AuthService
  ) {}

  redirectToForm(): void {
    const userRole = this.authService.getUserRole();

    if (userRole === 'client') {
      this.router.navigate(['/product-request']);
    } else if (userRole === 'employee') {
      alert('Solo los clientes pueden solicitar productos.');
    } else {
      alert('Debe iniciar sesión como cliente para solicitar un producto.');
      this.router.navigate(['/login']);
    }
  }

  changeImage(productType: string): void {
    const images: Record<string, string> = {
      savings: '/images/alcancia.png',
      credit: '/images/credit-card.jpg',
      mortgage: '/images/hipoteca.png',
      car: '/images/auto.png',
      personal: '/images/prestamo.png',
    };

    this.currentImage = images[productType] || '/images/bank-image.webp';
  }

  resetImage(): void {
    this.currentImage = '/images/bank-image.webp';
  }
}
