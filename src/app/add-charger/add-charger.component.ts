import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ConnectServiceService } from '../connect-service.service';

@Component({
  selector: 'app-add-charger',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-charger.component.html',
  styleUrls: ['./add-charger.component.css']
})
export class AddChargerComponent {
  chargerAddress: string = '';
  pricePerKwh: number | null = 0;
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private connectService: ConnectServiceService) {}

  onAddCharger(): void {
    const requestData = {
      charger_address: this.chargerAddress,
      price_per_kwh: this.pricePerKwh
    };

    this.connectService.addCharger(requestData).subscribe(
      response => {
        this.successMessage = 'Charger successfully added!';
        this.errorMessage = '';
      },
      error => {
        this.errorMessage = 'Failed to add charger: ' + error.message;
        this.successMessage = '';
      }
    );
  }
}
