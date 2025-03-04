import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private http = inject(HttpClient);
  private loginUrl = 'http://127.0.0.1:8000/api/login/';

  login(user_address: string, password: string): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const body = JSON.stringify({ user_address, password });

    return this.http.post(this.loginUrl, body, { headers })
      .pipe(map((response: any) => {
        // store user details and jwt token in local storage
        if (response.token) {
          localStorage.setItem('currentUser', JSON.stringify(response));
        }
        return response;
      }));
  }

  logout(): void {
    localStorage.removeItem('currentUser');
  }

  getToken(): string | null {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    return currentUser?.token;
  }
}
