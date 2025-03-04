import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowTransactionsComponent } from '../show-transactions/show-transactions.component';
import { ResultComponent } from '../result/result.component';
import { SendTransactionComponent } from '../send-transaction/send-transaction.component';
import { IncreaseBalanceComponent } from '../increase-balance/increase-balance.component';
import { TopbarComponent } from '../topbar/topbar.component';

@Component({
  standalone: true,
  imports: [CommonModule, ShowTransactionsComponent, ResultComponent, SendTransactionComponent, IncreaseBalanceComponent, TopbarComponent],
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  resultData: any;
  transactionData: any[]=[];

  updateResultData(data: any) {
    this.resultData = data;
  }
  
  handleDataFetched(data: any[]): void { this.transactionData = data; console.log('Data fetched:', this.transactionData); // Do something with the data
}
}
