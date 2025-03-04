import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConnectServiceService } from '../connect-service.service';

@Component({
  selector: 'app-seller-summaries',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './seller-summaries.component.html',
  styleUrls: ['./seller-summaries.component.css']
})
export class SellerSummariesComponent implements OnInit {
  summaryForm!: FormGroup;
  summaries: any[] = [];
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, private connectService: ConnectServiceService) {}

  ngOnInit(): void {
    this.summaryForm = this.fb.group({
      start_date: [''],
      end_date: ['']
    });
    
    this.refreshDashboard();
  }
  refreshDashboard(){
    this.getSellerSummaries();


  }
  getSellerSummaries(): void {
    this.isLoading = true;
    this.connectService.getSellerSummaries().subscribe(
      (response: any) => {
        this.isLoading = false;
        this.summaries = response.data;
      },
      (error) => {
        this.isLoading = false;
        this.errorMessage = 'Nie udało się pobrać podsumowań sprzedawców. Skontaktuj się z administratorem';
      }
    );
  }

  paySeller(id: string): void {
    this.connectService.paySeller(id).subscribe(
      (response: any) => {
        this.errorMessage = 'Udało się wykonać transakcję'; 
        const summary = this.summaries.find(s => s.id === id);
        if (summary) { summary.paid = true; }
        this.errorMessage = 'Udało się wykonać transakcję';
      },
      (error) => {
        this.errorMessage = 'Nie udało się wykonać transakcji';
      }
    );
  }
}
