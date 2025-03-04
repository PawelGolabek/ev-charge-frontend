import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectServiceService } from '../connect-service.service';

@Component({
  selector: 'app-list-chargers',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './list-chargers.component.html',
  styleUrls: ['./list-chargers.component.css']
})
export class ListChargersComponent implements OnInit {
  chargers: Array<{ charger_address: string; price_per_kwh: number }> = [];
  errorMessage: string = '';

  constructor(private connectService: ConnectServiceService) {}

  ngOnInit(): void {
    this.fetchChargers();
  }

  fetchChargers(): void {
    this.connectService.getChargers().subscribe(
      response => {
        this.chargers = response.data;
        this.errorMessage = '';
      },
      error => {
        this.errorMessage = 'Failed to load chargers: ' + error.message;
      }
    );
  }
}
