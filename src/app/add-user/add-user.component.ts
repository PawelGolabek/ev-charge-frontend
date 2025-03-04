import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ConnectServiceService } from '../connect-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {
  userAddress: string = '';
  role: string = 'Client'; // Default role
  successMessage: string = '';
  errorMessage: string = '';

  constructor(private connectService: ConnectServiceService) {}

  onAddUser(): void {
    const requestData = {
      user_address: this.userAddress,
      role: this.role,
    };

    console.log('Data being sent:', requestData);

    this.connectService.addUser(requestData).subscribe(
      data => {
        console.log(data);
        this.successMessage = 'User successfully added.';
        this.errorMessage = '';
      },
      error => {
        console.error(error);
        this.errorMessage = 'Failed to add user. Error: ' + error.message;
        this.successMessage = '';
      }
    );
  }
}
