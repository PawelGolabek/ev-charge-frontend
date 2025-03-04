import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellerSummariesComponent } from './seller-summaries.component';

describe('SellerSummariesComponent', () => {
  let component: SellerSummariesComponent;
  let fixture: ComponentFixture<SellerSummariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SellerSummariesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SellerSummariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
