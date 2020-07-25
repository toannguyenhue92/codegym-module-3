import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStay } from '../models/IStay';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StayService {

  private readonly API_URL = 'http://localhost:3000/stays';

  constructor(private httpClient: HttpClient) { }

  getAllStayService(): Observable<IStay[]> {
    return this.httpClient.get<IStay[]>(this.API_URL);
  }

  getStayServiceById(id: number): Observable<IStay> {
    return this.httpClient.get<IStay>(`${this.API_URL}/${id}`);
  }

  getStayServiceByCode(code: string): Observable<IStay[]> {
    return this.httpClient.get<IStay[]>(`${this.API_URL}?stayServiceCode=${code}`);
  }

  createStayService(stay: Partial<IStay>): Observable<IStay> {
    return this.httpClient.post<IStay>(this.API_URL, stay);
  }

}
