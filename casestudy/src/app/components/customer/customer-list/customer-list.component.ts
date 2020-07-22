import { Component, OnInit } from '@angular/core';
import { ICustomer } from 'src/app/models/ICustomer';
import { CustomerService } from 'src/app/services/customer.service';

@Component({
  selector: 'app-customer-list',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {

  customerList: Array<ICustomer>;
  term: string;
  p: number;
  deletedCustomer: ICustomer;

  constructor(
    private customerService: CustomerService) {
    this.p = 1;
    this.customerList = new Array<ICustomer>();
  }

  ngOnInit() {
    this.customerService.getAllCustomers().subscribe(value => {
      this.customerList = value;
    }, error => console.error(error));
  }

  pageBoundsChanged(currentTotalPage: number) {
    if (this.p > currentTotalPage) {
      this.p = currentTotalPage;
    }
  }

  pickDeletedCustomer(customer: ICustomer) {
    console.table(customer);
    this.deletedCustomer = customer;
  }

  delete() {
    this.customerService.deleteCustomer(this.deletedCustomer).subscribe(() => {
      this.customerList = this.customerList.filter((customer) => {
        return customer.id !== this.deletedCustomer.id;
      });
    }, error => {
      console.log(error);
    });
  }
}
