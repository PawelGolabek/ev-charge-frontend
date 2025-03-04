import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'show-transactions',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './show-transactions.component.html',
  styleUrls: ['./show-transactions.component.css']
})
export class ShowTransactionsComponent {
  @Input() transactions: any[] = [
    {
      "client": "0xdD2FD4581271e230360230F9337D5c0430Bf44C0",
      "charger": "0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199",
      "demand": 1060,
      "totalCost": 21200,
      "isCompleted": "W toku",
      "chargerOwner": "0x90F79bf6EB2c4f870365E785982E1f101E93b906"
    },
  ];
}
