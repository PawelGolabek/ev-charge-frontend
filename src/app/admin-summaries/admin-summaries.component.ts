import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConnectServiceService } from '../connect-service.service';

@Component({
  selector: 'app-admin-summaries',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './admin-summaries.component.html',
  styleUrls: ['./admin-summaries.component.css']
})
export class AdminSummariesComponent implements OnInit {
  summaryForm!: FormGroup;
  dateRange: any = { newest_date_without_summary: '', yesterday_date: '' };
  isLoading: boolean = false;
  errorMessage: string = '';
  @Output() refreshDashboard = new EventEmitter<void>();

  constructor(private fb: FormBuilder, private connectService: ConnectServiceService) {}

  ngOnInit(): void {
    this.summaryForm = this.fb.group({
      start_date: [''],
      end_date: ['']
    });

    // Initialize form with empty values
    this.summaryForm.patchValue({
      start_date: '',
      end_date: ''
    });
  }

  getDateRange(): void {
    this.connectService.getSummariesDateRange().subscribe(
      (response: any) => {
        this.dateRange = response;
        this.summaryForm.patchValue({
          start_date: this.dateRange.newest_date_without_summary,
          end_date: this.dateRange.yesterday_date
        });
      },
      (error) => {
        this.errorMessage = 'Nie udało się pobrać zakresu dat';
      }
    );
  }

  generateSummary(): void {
    if (this.summaryForm.valid) {
      this.isLoading = true;
      const formData = {
        start_date: this.summaryForm.value.start_date,
        end_date: this.summaryForm.value.end_date
      };

      this.connectService.generateSummaries(formData).subscribe(
        (response) => {
          this.isLoading = false;
          this.refreshDashboard.emit(); // Emit event to notify AdminDashboard that new summary to show

        },
        (error) => {
          this.isLoading = false;
          this.errorMessage = error.error.message || 'Błąd przy generowaniu podsumowań';
        }
      );
    } else {
      this.errorMessage = 'Wypełnij poprawnie formularz';
    }
  }
}
