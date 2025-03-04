import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SigningComponent } from '../signing/signing.component';
import { ConnectServiceService } from '../connect-service.service';
import { ResultComponent } from '../result/result.component';
import { ShowTransactionsComponent } from '../show-transactions/show-transactions.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, SigningComponent, ResultComponent, ShowTransactionsComponent, LoginComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  element = [{}];
  title = 'EVCharge';
  resultData: any;

  constructor(private api: ConnectServiceService) {}

  updateResultData(data: any) { this.resultData = data; }

}
