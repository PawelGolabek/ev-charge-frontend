import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncreaseBalanceComponent } from './increase-balance.component';

describe('IncreaseBalanceComponent', () => {
  let component: IncreaseBalanceComponent;
  let fixture: ComponentFixture<IncreaseBalanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IncreaseBalanceComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IncreaseBalanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
