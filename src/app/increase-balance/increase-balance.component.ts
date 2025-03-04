import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConnectServiceService } from '../connect-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-increase-balance',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './increase-balance.component.html',
  styleUrls: ['./increase-balance.component.css']
})
export class IncreaseBalanceComponent {
  amount: number = 0;
  errorMessage: string = '';
  successMessage: string = '';

  constructor(private connectService: ConnectServiceService) {}

  onIncreaseBalance(): void {
    const requestData = { 'amount': this.amount };
    console.log('Data being sent:', requestData);  // Log the data

    this.connectService.increaseBalance(requestData).subscribe(
      data => {
        console.log(data);
        this.successMessage = 'Pomyślnie doładowano konto. Hash Transakcji: ' + data.tx_hash;
        this.errorMessage = '';
      },
      error => {
        this.errorMessage = 'Nie doładowano konta. Kod błędu:' + error.message;
        this.successMessage = '';
      }
    );
  }
}
