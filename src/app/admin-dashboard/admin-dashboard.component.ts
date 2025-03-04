
import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowTransactionsComponent } from '../show-transactions/show-transactions.component';
import { ResultComponent } from '../result/result.component';
import { SendTransactionComponent } from '../send-transaction/send-transaction.component';
import { IncreaseBalanceComponent } from '../increase-balance/increase-balance.component';
import { TopbarComponent } from '../topbar/topbar.component';
import { AdminSummariesComponent } from '../admin-summaries/admin-summaries.component';
import { SellerSummariesComponent } from '../seller-summaries/seller-summaries.component';
import { AddUserComponent } from '../add-user/add-user.component';

  @Component({
    standalone: true,
    imports: [CommonModule, ShowTransactionsComponent, ResultComponent, SendTransactionComponent, IncreaseBalanceComponent, TopbarComponent, AdminSummariesComponent, SellerSummariesComponent, AddUserComponent],


  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrl: './admin-dashboard.component.css'
})

export class AdminDashboardComponent {
  resultData: any;
  transactionData: any[]=[];
  @ViewChild('adminDashboard') sellerSummaries!: SellerSummariesComponent;

  updateResultData(data: any) {
    this.resultData = data;
  }
  
  handleDataFetched(data: any[]): void { this.transactionData = data; console.log('Data fetched:', this.transactionData);
}
onDashboardRefresh() {
  this.sellerSummaries.refreshDashboard();
}

}
