import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankProductListComponent } from './bank-product-list.component';

describe('BankProductListComponent', () => {
  let component: BankProductListComponent;
  let fixture: ComponentFixture<BankProductListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BankProductListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankProductListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
