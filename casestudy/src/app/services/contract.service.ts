import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IContract } from '../models/IContract';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContractService {

  private readonly API_URL = 'http://localhost:3000/contracts';

  constructor(private httpClient: HttpClient) { }

  getAllContracts(): Observable<Array<IContract>> {
    return this.httpClient.get<Array<IContract>>(`${this.API_URL}?_expand=customer&_expand=stay`);
  }

  getContractById(id: number): Observable<IContract> {
    return this.httpClient.get<IContract>(`${this.API_URL}/${id}?_expand=customer&_expand=stay`);
  }

  createNewContract(contract: Partial<IContract>): Observable<Partial<IContract>> {
    return this.httpClient.post<Partial<IContract>>(this.API_URL, contract);
  }

  updateContract(contract: Partial<IContract>): Observable<Partial<IContract>> {
    return this.httpClient.patch<Partial<IContract>>(`${this.API_URL}/${contract.id}`, contract);
  }
}
