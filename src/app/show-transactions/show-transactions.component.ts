import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ConnectServiceService } from '../connect-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'show-transactions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-transactions.component.html',
  styleUrls: ['./show-transactions.component.css']
})
export class ShowTransactionsComponent {
  @Input() transactions: any[] = [];
  @Output() dataFetched = new EventEmitter<any>();
  showTransactions: boolean = false;

  constructor(private connectService: ConnectServiceService) {}

  onClick1(): void {
    this.connectService.getTransactions().subscribe(response => {
      this.transactions = response;
      this.dataFetched.emit(this.transactions);  
      this.showTransactions = true;
    });
  }
  onHideClick(): void { this.showTransactions = false;
}
}