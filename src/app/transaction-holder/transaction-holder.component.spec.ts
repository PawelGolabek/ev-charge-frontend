import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionHolderComponent } from './transaction-holder.component';

describe('TransactionHolderComponent', () => {
  let component: TransactionHolderComponent;
  let fixture: ComponentFixture<TransactionHolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionHolderComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionHolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
