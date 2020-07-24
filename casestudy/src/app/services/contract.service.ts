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
    return this.httpClient.get<Array<IContract>>(this.API_URL);
  }

  createNewContract(contract: IContract): Observable<IContract> {
    return this.httpClient.post<IContract>(this.API_URL, contract);
  }

}
