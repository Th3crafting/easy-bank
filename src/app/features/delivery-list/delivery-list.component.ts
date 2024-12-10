import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-delivery-list',
  templateUrl: './delivery-list.component.html',
  styleUrls: ['./delivery-list.component.css'],
})
export class DeliveryListComponent implements OnInit {
  deliveries = [
    { id: 1, clientName: 'Juan Pérez', address: '123 Calle Principal', date: new Date(), status: 'pending' },
    { id: 2, clientName: 'María López', address: '456 Avenida Secundaria', date: new Date(), status: 'delivered' },
    { id: 3, clientName: 'Carlos Gómez', address: '789 Plaza Central', date: new Date(), status: 'rescheduled' },
  ];

  filterStatus: string = 'all';
  filteredDeliveries = [...this.deliveries];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.applyFilter();
  }

  applyFilter(): void {
    if (this.filterStatus === 'all') {
      this.filteredDeliveries = this.deliveries;
    } else {
      this.filteredDeliveries = this.deliveries.filter(
        (delivery) => delivery.status === this.filterStatus
      );
    }
  }

  goToDelivery(deliveryId: any): void {
    this.router.navigate(['/delivery-request'], { queryParams: { id: deliveryId } });
  }
}
