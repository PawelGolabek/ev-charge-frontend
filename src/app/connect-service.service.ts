import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConnectServiceService {


  constructor(private http: HttpClient) {}
  baseurl ='http://127.0.0.1:8000'; 
  httpHeaders = new HttpHeaders({'Content-type': 'application/json'});
  
  getSomething(): Observable<any>{
    return this.http.get(this.baseurl + '/simple', {headers: this.httpHeaders});
  }
  

  getTransactions(): Observable<any> {
    let transactionsUrl = 'http://127.0.0.1:8000/api/transactions/';
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const token = currentUser?.token;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get(transactionsUrl, { headers });
  }

  sendTransaction(transactionData: any): Observable<any> {
    let transactionsUrl = 'http://127.0.0.1:8000/api/add-charging-session/';
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const token = currentUser?.token;
  
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
  
    return this.http.post(transactionsUrl, transactionData, { headers });
  }


  increaseBalance(data: any): Observable<any> {
    let transactionsUrl = 'http://127.0.0.1:8000/api/increase-balance/';
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const token = currentUser?.token;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<any>(transactionsUrl, data, { headers });
  } 
  
  getSummariesDateRange(): Observable<any> {
    let transactionsUrl = 'http://127.0.0.1:8000/api/generate-summaries-date/';
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const token = currentUser?.token;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get(transactionsUrl, { headers });
  }
  
  generateSummaries(data: any): Observable<any> {
    let transactionsUrl = 'http://127.0.0.1:8000/api/generate-summaries/';
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const token = currentUser?.token;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });
    return this.http.post<any>(transactionsUrl, data, { headers });
  }
  
  getSellerSummaries(): Observable<any> {
    let transactionsUrl = 'http://127.0.0.1:8000/api/fetch-summaries/';
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const token = currentUser?.token;

    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    });

    return this.http.get(transactionsUrl, { headers });
  }

    paySeller(id: string): Observable<any> {
      let transactionsUrl = 'http://127.0.0.1:8000/api/pay-seller/';
      const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
      const token = currentUser?.token;

      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });
      return this.http.post(transactionsUrl, id,  { headers });
    }
    
    addUser(data: any): Observable<any> {
      const url = 'http://127.0.0.1:8000/api/add-user/';
      const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
      const token = currentUser?.token;
      const headers = new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });
      return this.http.post<any>(url, data, { headers });
    }
    
    addCharger(data: any): Observable<any> {
      const url = 'http://127.0.0.1:8000/api/add-charger/';
      return this.http.post<any>(url, data, { headers: this.getAuthHeaders() });
    }
    
    updatePrice(data: any): Observable<any> {
      const url = 'http://127.0.0.1:8000/api/update-charger/';
      return this.http.post<any>(url, data, { headers: this.getAuthHeaders() });
    }
    getChargers(): Observable<any> {
      const url = 'http://127.0.0.1:8000/api/list-chargers/';
      return this.http.get<any>(url, { headers: this.getAuthHeaders() });
    }
    
    private getAuthHeaders(): HttpHeaders {
      const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
      const token = currentUser?.token;
    
      return new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      });
    }
    
 
      getContribution(): Observable<any> {
        const url = 'http://127.0.0.1:8000/api/check-contribution/';
        return this.http.get<any>(url, { headers: this.getAuthHeaders() });
      }
    
    
    
    



}
