import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-request-list',
  templateUrl: './request-list.component.html',
  styleUrls: ['./request-list.component.css']
})
export class RequestListComponent implements OnInit {
  requests: any[] = [];
  filterStatus: string = 'all';
  filteredRequests: any[] = [];

  constructor(private translate: TranslateService) {}

  ngOnInit(): void {
    this.requests = [
      {
        productName: this.translate.instant('PRODUCT_NAME'),
        clientName: 'Juan Pérez',
        date: new Date(),
        status: 'pending',
      },
      {
        productName: this.translate.instant('PRODUCT_NAME'),
        clientName: 'María López',
        date: new Date(),
        status: 'approved',
      },
      {
        productName: this.translate.instant('PRODUCT_NAME'),
        clientName: 'Carlos Gómez',
        date: new Date(),
        status: 'rejected',
      },
    ];

    this.applyFilter();
  }

  applyFilter(): void {
    if (this.filterStatus === 'all') {
      this.filteredRequests = [...this.requests];
    } else {
      this.filteredRequests = this.requests.filter(
        (request) => request.status === this.filterStatus
      );
    }
  }
}
