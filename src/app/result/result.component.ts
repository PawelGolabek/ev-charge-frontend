import { Component, OnInit, Input } from '@angular/core';
import { ConnectServiceService } from '../connect-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-results',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css']
})
export class ResultComponent implements OnInit {
  @Input() data: any;
  items: any[] = [];

  constructor(private connectService: ConnectServiceService) {}

  ngOnInit() {
    
  }
}
