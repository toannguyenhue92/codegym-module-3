import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICustomer } from '../models/ICustomer';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private readonly API_URL = 'http://localhost:3000/customers';

  constructor(private httpClient: HttpClient) { }

  getAllCustomers(): Observable<Array<ICustomer>> {
    return this.httpClient.get<Array<ICustomer>>(this.API_URL);
  }

  createNewCustomer(customer: Partial<ICustomer>): Observable<any> {
    return this.httpClient.post(this.API_URL, customer);
  }
}
