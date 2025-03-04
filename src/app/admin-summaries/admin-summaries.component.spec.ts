import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSummariesComponent } from './admin-summaries.component';

describe('AdminSummariesComponent', () => {
  let component: AdminSummariesComponent;
  let fixture: ComponentFixture<AdminSummariesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminSummariesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AdminSummariesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
