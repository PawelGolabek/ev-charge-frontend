import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ethers } from 'ethers';

@Component({
  selector: 'app-signing',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './signing.component.html',
  styleUrls: ['./signing.component.css']
})
export class SigningComponent {
  signature: string | null = null;
  messageHash: string | null = null;

  async signMessage() {
    if (typeof window.ethereum !== 'undefined') {
      const provider = new ethers.BrowserProvider(window.ethereum);
      await provider.send("eth_requestAccounts", []); // Request MetaMask account
      const signer = await provider.getSigner();  // Await the signer
      const message = 'Hello, sign this message!';
      this.messageHash = ethers.hashMessage(message);
      console.log('Message Hash:', this.messageHash);
      const signature = await signer.signMessage(message);
      this.signature = signature;
      console.log('Signature:', signature);

      // Send the signed message
      this.sendSignedMessage(signature);
    } else {
      console.error('MetaMask is not installed');
    }
  }

  sendSignedMessage(signedMessage: string) {
    console.log('Sending signed message:', signedMessage);
    console.log(ethers.verifyMessage("Hello, sign this message!", signedMessage));
  }
}
