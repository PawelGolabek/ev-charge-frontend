import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from '../authentication.service';

@Component({
  standalone: true,
  imports: [CommonModule, FormsModule],
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  user_address: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthenticationService, private router: Router) { }
  login(): void {
    this.authService.login(this.user_address, this.password).subscribe(
      data => {
        console.log(data);
        const token = data.access;
        if (token) {
          localStorage.setItem('currentUser', JSON.stringify({ token }));
  
          // Decode the token manually
          try {
            const tokenPayload = JSON.parse(atob(token.split('.')[1]));
            const role = tokenPayload.role;
  
            // Navigate based on the role
            switch (role) {
              case "None": // None
                this.errorMessage = 'Role not assigned';
                break;
              case "Admin": // Admin
                this.router.navigate(['/admin-dashboard']);
                break;
              case "Seller": // Seller
                this.router.navigate(['/seller-dashboard']);
                break;
              case "Client": // Client
                this.router.navigate(['/dashboard']);
                break;
              default:
                this.errorMessage = 'Unknown role';
            }
          } catch (error) {
            this.errorMessage = 'Invalid token format';
          }
        } else {
          this.errorMessage = 'Login successful, but no token received';
        }
      },
      error => {
        this.errorMessage = 'Invalid credentials';
      }
    );
  }
}