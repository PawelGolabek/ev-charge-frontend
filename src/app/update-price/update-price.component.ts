import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConnectServiceService } from '../connect-service.service';

@Component({
  selector: 'app-update-price',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-price.component.html',
  styleUrls: ['./update-price.component.css']
})
export class UpdatePriceComponent {
  chargerAddress: string = '';
  newPricePerKwh: number | null = null;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private connectService: ConnectServiceService) {}

  onUpdatePrice(): void {
    const requestData = {
      charger_address: this.chargerAddress,
      price_per_kwh: this.newPricePerKwh
    };

    this.connectService.updatePrice(requestData).subscribe(
      response => {
        this.successMessage = 'Price updated successfully!';
        this.errorMessage = '';
      },
      error => {
        this.errorMessage = 'Failed to update price: ' + error.message;
        this.successMessage = '';
      }
    );
  }

}
