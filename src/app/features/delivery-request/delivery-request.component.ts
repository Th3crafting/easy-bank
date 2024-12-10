import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-delivery-request',
  templateUrl: './delivery-request.component.html',
  styleUrls: ['./delivery-request.component.css'],
})
export class DeliveryRequestComponent implements OnInit {
  deliveryRequestForm: FormGroup;
  deliveryId: number | null = null;
  deliveryData: any = null;

  deliveries = [
    { id: 1, clientName: 'Juan Pérez', address: '123 Calle Principal', date: new Date(), status: 'pending' },
    { id: 2, clientName: 'María López', address: '456 Avenida Secundaria', date: new Date(), status: 'delivered' },
    { id: 3, clientName: 'Carlos Gómez', address: '789 Plaza Central', date: new Date(), status: 'rescheduled' },
  ];

  constructor(private route: ActivatedRoute, private fb: FormBuilder) {
    this.deliveryRequestForm = this.fb.group({
      location: ['', Validators.required],
      date: ['', Validators.required],
      confirmationStatus: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // Obtener ID del envío desde los parámetros de la URL
    this.route.queryParams.subscribe((params) => {
      this.deliveryId = +params['id'];
      this.loadDeliveryData();
    });
  }

  loadDeliveryData(): void {
    if (this.deliveryId !== null) {
      this.deliveryData = this.deliveries.find((delivery) => delivery.id === this.deliveryId);
      if (this.deliveryData) {
        this.deliveryRequestForm.patchValue({
          location: this.deliveryData.address,
          date: this.deliveryData.date,
          confirmationStatus: this.deliveryData.status,
        });
      }
    }
  }

  onSubmit(): void {
    if (this.deliveryRequestForm.invalid) {
      alert('Por favor, completa todos los campos correctamente.');
      return;
    }
    console.log('Datos enviados:', this.deliveryRequestForm.value);
    alert('Solicitud de entrega guardada exitosamente.');
  }
}
