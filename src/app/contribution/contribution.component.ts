import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectServiceService } from '../connect-service.service';

@Component({
  selector: 'app-contribution',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contribution.component.html',
  styleUrls: ['./contribution.component.css']
})
export class ContributionComponent implements OnInit {
  databaseContribution: number = 0;
  blockchainContribution: number = 0;
  errorMessage: string = '';

  constructor(private connectService: ConnectServiceService) {}

  ngOnInit(): void {
    this.fetchContribution();
  }

  fetchContribution(): void {
    this.connectService.getContribution().subscribe(
      response => {
        this.databaseContribution = response.data.database_contribution;
        this.blockchainContribution = response.data.blockchain_contribution;
        this.errorMessage = '';
      },
      error => {
        this.errorMessage = 'Failed to fetch contributions: ' + error.message;
      }
    );
  }
}
