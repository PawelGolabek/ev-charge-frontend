import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListChargersComponent } from './list-chargers.component';

describe('ListChargersComponent', () => {
  let component: ListChargersComponent;
  let fixture: ComponentFixture<ListChargersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListChargersComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListChargersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
