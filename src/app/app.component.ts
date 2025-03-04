import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SigningComponent } from './signing/signing.component';

import { ConnectServiceService } from '../app/connect-service.service'
import { ResultComponent } from './result/result.component';
import { ShowTransactionsComponent } from './show-transactions/show-transactions.component';
import { LoginComponent } from './login/login.component';
import { SendTransactionComponent } from './send-transaction/send-transaction.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SigningComponent, ResultComponent, ShowTransactionsComponent, LoginComponent, SendTransactionComponent],
  template: '<router-outlet></router-outlet>',
  styleUrl: './app.component.css'

  
})

export class AppComponent {
  element = [{}]
  title = 'EVCharge';
  resultData: any;
  constructor(private api: ConnectServiceService){
  }

  updateResultData(data: any) { this.resultData = data;}

  getSomething = () => {
    this.api.getSomething().subscribe();
  }

  getTransactions = () => {
    this.api.getTransactions().subscribe();
  }
  
}
