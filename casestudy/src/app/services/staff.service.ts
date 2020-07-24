import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IStaff } from '../models/IStaff';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StaffService {

  private readonly API_URL = 'http://localhost:3000/staffs';

  constructor(private httpClient: HttpClient) { }

  getAllStaffs(): Observable<Array<IStaff>> {
    return this.httpClient.get<Array<IStaff>>(this.API_URL);
  }

  createNewStaff(staff: Partial<IStaff>): Observable<IStaff> {
    return this.httpClient.post<IStaff>(this.API_URL, staff);
  }

}
