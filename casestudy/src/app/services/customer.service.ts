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

  getCustomerById(id: number): Observable<ICustomer> {
    return this.httpClient.get<ICustomer>(`${this.API_URL}/${id}`);
  }

  getCustomerByCode(code: string): Observable<Array<ICustomer>> {
    return this.httpClient.get<Array<ICustomer>>(`${this.API_URL}?customerCode=${code}`);
  }

  createNewCustomer(customer: Partial<ICustomer>): Observable<ICustomer> {
    return this.httpClient.post<ICustomer>(this.API_URL, customer);
  }

  updateCustomer(customer: ICustomer): Observable<ICustomer> {
    return this.httpClient.patch<ICustomer>(`${this.API_URL}/${customer.id}`, customer);
  }

  deleteCustomer(customer: ICustomer): Observable<void> {
    return this.httpClient.delete<void>(`${this.API_URL}/${customer.id}`);
  }
}
