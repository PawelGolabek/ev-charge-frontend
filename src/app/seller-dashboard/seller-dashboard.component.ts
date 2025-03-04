import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShowTransactionsComponent } from '../show-transactions/show-transactions.component';
import { ResultComponent } from '../result/result.component';
import { SendTransactionComponent } from '../send-transaction/send-transaction.component';
import { IncreaseBalanceComponent } from '../increase-balance/increase-balance.component';
import { TopbarComponent } from '../topbar/topbar.component';
import { ListChargersComponent } from '../list-chargers/list-chargers.component';
import { UpdatePriceComponent } from '../update-price/update-price.component';
import { AddChargerComponent } from '../add-charger/add-charger.component';
import { ContributionComponent } from '../contribution/contribution.component';

@Component({
  selector: 'app-seller-dashboard',
  standalone: true,
  imports: [CommonModule, ShowTransactionsComponent, ResultComponent, SendTransactionComponent, 
    IncreaseBalanceComponent, TopbarComponent, ListChargersComponent, UpdatePriceComponent, AddChargerComponent, ContributionComponent],
  templateUrl: './seller-dashboard.component.html',
  styleUrl: './seller-dashboard.component.css'
})
export class SellerDashboardComponent {

  resultData: any;
  transactionData: any[]=[];

  updateResultData(data: any) {
    this.resultData = data;
  }
  
  handleDataFetched(data: any[]): void {
    this.transactionData = data; console.log('Data fetched:', this.transactionData);
  }
}
