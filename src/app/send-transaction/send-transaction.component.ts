import { Component, EventEmitter, Output } from '@angular/core';
import { ConnectServiceService } from '../connect-service.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ethers } from 'ethers';

@Component({
  selector: 'app-send-transaction',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './send-transaction.component.html',
  styleUrl: './send-transaction.component.css'
})

export class SendTransactionComponent {
  charger_address : string = '0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199';
  demand : string = '';
  errorMessage: string = '';
  @Output() dataFetched = new EventEmitter<any>();
  signature: string | null = null;
  messageHash: string | null = null;

  constructor(private connectService: ConnectServiceService) {}
  
  
  async onClick1() {
    const currentUser = localStorage.getItem('currentUser');
    if (currentUser) {
      const token = JSON.parse(currentUser).token;
    
      const tokenPayload = JSON.parse(atob(token.split('.')[1]));
      const nonce = tokenPayload.nonce;
        if (typeof window.ethereum !== 'undefined') {
          const provider = new ethers.BrowserProvider(window.ethereum);
          await provider.send("eth_requestAccounts", []); 
          const signer = await provider.getSigner();
          const message = String(nonce);
          this.messageHash = ethers.hashMessage(message);
          const signature = await signer.signMessage(message);
          this.signature = signature;
        
        } else {
          console.error('MetaMask is not installed');
        }

      } else {
        console.log('No token found');
    }

    this.connectService.sendTransaction({'charger_address' : this.charger_address, 'demand' : Number(this.demand), 'hash' : this.messageHash, 'signature' : this.signature }).subscribe(
      data => {
          console.log(data);
        },
        error => {
          this.errorMessage = 'Invalid response';
        }
      );
    }
    
  signMessage() {
    }
}
  

