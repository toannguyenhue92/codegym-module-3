import { IStay } from './IStay';
import { ICustomer } from './ICustomer';

export interface IContract {
  id: number;
  stayId: number;
  customerId: number;
  checkInDate: string;
  checkOutDate: string;
  deposit: number;
  totalCost: number;
  stay: IStay;
  customer: ICustomer;
}
